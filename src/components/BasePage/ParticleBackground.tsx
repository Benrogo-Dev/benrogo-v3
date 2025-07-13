"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = async () => {
    console.log("%ctsParticles loaded!", "color:#1058df");
    return Promise.resolve();
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
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
              color: { value: ["#e526cb", "#149e93"] },
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
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
