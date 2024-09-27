// src/components/ParticleBackground.tsx

import React from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

export const ParticleBackground: React.FC = () => {
  const options: ISourceOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
        animation: {
          enable: true,
          speed: 2,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
    },
    retinaDetect: true,
  };

  return <Particles id="tsparticles" options={options} />;
};
