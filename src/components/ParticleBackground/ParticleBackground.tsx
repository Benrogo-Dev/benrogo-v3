'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Particles, { IParticlesProps } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ThemeColor, ColorIntensity } from '@/types/colors';

interface ParticleBackgroundProps extends IParticlesProps {
  colors?: ThemeColor[];
  colorIntensity?: ColorIntensity;
}

const ParticleBackground = ({
  colors = ['magenta', 'cyan'],
  colorIntensity = 400,
  ...props
}: ParticleBackgroundProps) => {
  const [init, setInit] = useState(false);

  const options = useMemo(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const colorsArray = colors.map((color) =>
        getComputedStyle(root).getPropertyValue(`--${color}-${colorIntensity}`).trim()
      );

      return {
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: { value: '#000000' },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: { enable: true },
          },
        },
        particles: {
          color: { value: colorsArray },
          move: {
            direction: 'bottom',
            enable: true,
            random: true,
            speed: { min: 0.5, max: 1 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 400,
            },
            value: 80,
          },
          opacity: {
            value: { min: 0.3, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: { type: 'square' },
          size: { value: { min: 1, max: 4 } },
        },
        emitters: {
          direction: 'bottom',
          rate: {
            quantity: 5,
            delay: 0.1,
          },
          size: {
            width: 100,
            height: 0,
          },
          position: {
            x: 50,
            y: 0,
          },
        },
        detectRetina: true,
      } as IParticlesProps['options'];
    }

    return {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: { value: '#000000' },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
          resize: { enable: true },
        },
      },
      particles: {
        color: { value: ['#ffffff'] },
        move: {
          direction: 'bottom',
          enable: true,
          random: true,
          speed: { min: 0.5, max: 1 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 800,
            height: 400,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: { type: 'square' },
        size: { value: { min: 1, max: 4 } },
      },
      emitters: {
        direction: 'bottom',
        rate: {
          quantity: 5,
          delay: 0.1,
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          x: 50,
          y: 0,
        },
      },
      detectRetina: true,
    } as IParticlesProps['options'];
  }, [colors, colorIntensity]);

  useEffect(() => {
    const initializeParticles = async () => {
      const { tsParticles } = await import('@tsparticles/engine');
      await loadSlim(tsParticles);
      setInit(true);
    };

    initializeParticles();
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          {...props}
        />
      )}
    </>
  );
};

export default ParticleBackground;
