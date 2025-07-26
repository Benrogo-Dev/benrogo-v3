"use client";

import React, { useEffect, useState } from "react";
import Particles, { IParticlesProps } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles, IOptions, RecursivePartial } from "@tsparticles/engine";
import type { ThemeColor, ColorIntensity } from "@/types/colors";

interface ParticleBackgroundProps extends IParticlesProps {
  colors?: ThemeColor[];
  colorIntensity?: ColorIntensity;
}

const ParticleBackground = ({
  colors = ["magenta", "cyan"],
  colorIntensity = 400,
  ...props
}: ParticleBackgroundProps) => {
  const [particlesOptions, setParticlesOptions] = useState<RecursivePartial<IOptions> | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const computedColors = colors.map((color) => getComputedStyle(root).getPropertyValue(`--${color}-${colorIntensity}`).trim());

    const initializeParticles = async () => {
      await loadSlim(tsParticles);
      setParticlesOptions({
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: { value: "#000000" },
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
          color: { value: computedColors },
          move: {
            direction: "bottom",
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
          shape: { type: "square" },
          size: { value: { min: 1, max: 4 } },
        },
        emitters: {
          direction: "bottom",
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
      });
    };

    initializeParticles();
  }, [colors, colorIntensity]);

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions || {}}
      {...props}
    />
  );
};

export default ParticleBackground;
