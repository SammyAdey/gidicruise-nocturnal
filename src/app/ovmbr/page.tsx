"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className='relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black'>
			<div className='relative z-10 flex min-h-screen w-full items-center justify-center sm:items-start'>
				<Image className='absolute top-0 h-screen w-full z-10' src='/images/ovmbr/ovmbr-title-2.png' alt='Title Card' width={1512} height={24} />
				<Image className='absolute top-0 h-screen w-full' src='/images/ovmbr/ovmbr.png' alt='BG Image' width={1400} height={24} />
			</div>
			<Image className='absolute bottom-0 left-0 ' src='/images/leaves-1.png' alt='Title Card' width={363} height={24} />
			<Image className='absolute bottom-0 right-0 ' src='/images/leaves-2.png' alt='Title Card' width={363} height={24} />
			<Link
				href=''
				className='absolute px-10 py-3 bottom-[50px] cursor-pointer bg-[#D13833] hover:bg-[#FFD926] hover:text-black left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center font-bold text-lg'
			>
				Buy Tickets
			</Link>
		</div>
	);
}
