"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
			<div className='relative z-10 flex flex-col md:flex-row gap-12 min-h-screen w-[80%] md:w-full items-center justify-center'>
				<div className='flex flex-col gap-4 md:gap-0 md:h-[450px] items-center justify-between'>
					<Image className='' src='/images/nocturnal-title-card-2.png' alt='BG Image' width={665} height={350} />
					<Link
						href='/nocturnal'
						className='cursor-pointer hover:bg-[#D800FF] flex gap-8 w-fit px-8 py-4 items-center justify-between font-bold border-[2px] text-lg'
					>
						Nocturnal
						<ArrowRight />
					</Link>
				</div>
				<div className='flex flex-col gap-4 md:gap-0 md:h-[450px] items-center justify-between'>
					<Image className='' src='/images/ovmbr-title-card.png' alt='Title Card' width={665} height={300} />
					<Link
						href='/ovmbr'
						className='cursor-pointer hover:bg-[#D800FF] flex gap-8 w-fit px-8 py-4 items-center justify-between font-bold border-[2px] text-lg'
					>
						Ovmbr Cruise
						<ArrowRight />
					</Link>
				</div>
			</div>
			<Image className='absolute -bottom-10 md:bottom-0 -left-10 md:left-0 ' src='/images/leaves-1.png' alt='Title Card' width={363} height={24} />
			<Image className='absolute -bottom-10 md:bottom-0 -right-10 md:right-0 ' src='/images/leaves-2.png' alt='Title Card' width={363} height={24} />
		</div>
	);
}
