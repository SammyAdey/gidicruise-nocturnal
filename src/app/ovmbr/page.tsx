"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className='relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black'>
			<div className='relative z-10 flex min-h-screen overflow-hidden w-screen items-center justify-center sm:items-start'>
				<Image
					className='absolute top-0 h-screen hidden md:block w-full z-10'
					src='/images/ovmbr/ovmbr-title-2.png'
					alt='Title Card'
					width={1512}
					height={24}
				/>
				<Image
					className='absolute top-0 h-screen w-[1500px] hidden md:block w-full'
					src='/images/ovmbr/ovmbr.png'
					alt='BG Image'
					width={1400}
					height={24}
				/>
				<Image
					className='absolute top-0 h-screen w-[1500px] block md:hidden w-full'
					src='/images/ovmbr/ovmbr-bg-mobile.jpg'
					alt='BG Image'
					width={1400}
					height={24}
				/>
			</div>
			<Image className='absolute bottom-0 left-0 ' src='/images/leaves-1.png' alt='Title Card' width={363} height={24} />
			<Image className='absolute bottom-0 right-0 ' src='/images/leaves-2.png' alt='Title Card' width={363} height={24} />
			<div className='-translate-x-1/2 -translate-y-1/2 absolute bottom-[50px] flex md:flex-row flex-col gap-4 left-1/2 z-10'>
				<Link
					href='https://www.theexhibit.co/events/GXOO-2025-qu4sl167n'
					className='px-8 md:px-10 py-3 cursor-pointer bg-[#FFD926] hover:bg-[#D13833] text-black hover:text-white flex items-center justify-center font-bold text-lg'
				>
					Buy Ticket (N)
				</Link>
				<Link
					href='https://www.eventbrite.com/e/gidicruise-nocturnal-tickets-1975586224579?aff=oddtdtcreator'
					className='px-8 md:px-10 py-3 cursor-pointer bg-[#FFD926] hover:bg-[#D13833] text-black hover:text-white flex items-center justify-center font-bold text-lg'
				>
					Buy Ticket ($)
				</Link>
			</div>
		</div>
	);
}
