"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAudio } from "@/components/AudioProvider";
declare global {
  interface Window {
    particlesJS?: (tagId: string, params?: Record<string, unknown>) => void;
    pJSDom?: Array<{
      pJS: {
        fn: {
          vendors: {
            destroy?: () => void;
          };
        };
      };
    }>;
  }
}

const PARTICLE_OPTIONS: Record<string, unknown> = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ffffff", "#a5b4fc", "#c7d2fe"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
      },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 0.6,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.8,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
};

const ParticleBackground = () => {
  useEffect(() => {
    let canceled = false;

    const initParticles = async () => {
      await import("particles.js");
      if (canceled) return;
      window.particlesJS?.("particles-background", PARTICLE_OPTIONS);
    };

    initParticles();

    return () => {
      canceled = true;
      window.pJSDom?.forEach((instance) => {
        instance?.pJS?.fn?.vendors?.destroy?.();
      });
      window.pJSDom = [];
    };
  }, []);

  return (
    <div
      id="particles-background"
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
};

export default function Home() {
  const { play } = useAudio();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col md:flex-row gap-12 min-h-screen w-[80%] md:w-full items-center justify-center">
        <div className="flex flex-col gap-4 md:gap-0 md:h-[450px] items-center justify-between">
          <Image
            className=""
            src="/images/nocturnal-title-card-2.png"
            alt="BG Image"
            width={665}
            height={350}
          />
          <Link
            href="/nocturnal"
            onClick={() => play()}
            className="cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-[#D800FF] border-2 border-white hover:border-[#D800FF] text-white hover:text-black flex gap-4 md:gap-8 w-full md:w-fit px-4 md:px-8 py-4 md:py-4 min-h-[48px] items-center justify-center md:justify-between font-bold text-base md:text-lg rounded-lg transition-all duration-300 ease-in-out active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="text-sm md:text-base text-left">
              Own the night at NOCTURNAL
            </span>
            <ArrowRight className="-rotate-[15deg]" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:h-[450px] items-center justify-between">
          <div className="flex flex-col relative">
            <Image
              src="/images/gidi-logo.png"
              alt="gidicruise logo"
              width={200}
              height={200}
              className="absolute w-[150px] md:w-auto top-5 left-0 md:top-9 md:left-4"
            />
            <Image
              //   className="border border-red-400"
              src="/images/ovmbr-title-card.png"
              alt="Title Card"
              width={665}
              height={300}
            />
          </div>
          <Link
            href="/ovmbr"
            onClick={() => play()}
            className="cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-[#D13833] border-2 border-white hover:border-[#D13833] text-white hover:text-white flex gap-4 md:gap-8 w-full md:w-fit px-4 md:px-8 py-4 md:py-4 min-h-[48px] items-center justify-center md:justify-between font-bold text-base md:text-lg rounded-lg transition-all duration-300 ease-in-out active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="text-sm md:text-base text-left">
              Hop aboard the OVMBR CRUISE
            </span>
            <ArrowRight className="-rotate-[15deg]" />
          </Link>
        </div>
      </div>
      <Image
        className="absolute -bottom-10 md:bottom-0 -left-10 md:left-0 "
        src="/images/leaves-1.png"
        alt="Title Card"
        width={363}
        height={24}
      />
      <Image
        className="absolute -bottom-10 md:bottom-0 -right-10 md:right-0 "
        src="/images/leaves-2.png"
        alt="Title Card"
        width={363}
        height={24}
      />
    </div>
  );
}
