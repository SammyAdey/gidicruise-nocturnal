"use client";

import { useEffect } from "react";
import Image from "next/image";

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

	return <div id='particles-background' className='pointer-events-none absolute inset-0' aria-hidden='true' />;
};

export default function Home() {
	return (
		<div className='relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black'>
			<ParticleBackground />
			<div className='relative z-10 flex min-h-screen w-full items-center justify-center sm:items-start'>
				<Image className='absolute top-0 h-screen' src='/images/title-card2.png' alt='Title Card' width={806} height={24} />
				<Image className='absolute top-0 h-screen animate-pulse' src='/images/title-card-overlay.png' alt='Title Card' width={806} height={24} />
			</div>
			<Image className='absolute bottom-0 left-0 ' src='/images/leaves-1.png' alt='Title Card' width={363} height={24} />
			<Image className='absolute bottom-0 right-0 ' src='/images/leaves-2.png' alt='Title Card' width={363} height={24} />
			<div className='absolute px-10 py-3 bottom-[50px] cursor-pointer hover:bg-[#D800FF] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center font-bold border-[2px] text-lg'>
				Buy Tickets
			</div>
		</div>
	);
}
