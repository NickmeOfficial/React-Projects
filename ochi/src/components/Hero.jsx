import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Hero() {
	return (
		<div className='w-full h-screen bg-zinc-900 pt-1'>
			<div className='text-structure mt-52 px-20'>
				<div className='masker '>
					<h1 className='text-9xl text-[7.5vw] uppercase leading-[6vw] tracking-tighter font-["Founders_Grotesk - 300"] font-bold'>
						We Create
					</h1>
					<h1 className='text-9xl text-[7.5vw] uppercase leading-[6vw] tracking-tighter font-["Founders_Grotesk - 300"] font-bold'>
						Eye Opening
					</h1>
					<h1 className='text-9xl text-[7.5vw] uppercase leading-[6vw] tracking-tighter font-["Founders_Grotesk - 300"] font-bold'>
						presentations
					</h1>
				</div>
			</div>
			<div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
				{[
					"For public and private companies",
					"From the first pitch to  IPO",
				].map((text, index) => (
					<p className='text-md font-light tracking-tight leading-none'>
						{text}
					</p>
				))}
				<div className='start flex items-center gap-5'>
					<div className='px-4 py-2 border-[1px] font-light text-md border-zinc-700 rounded-full uppercase'>
						Start the project
					</div>
					<div className='w-10 h-10 rounded-full border-zinc-700 border-[1px] flex items-center justify-center'>
						<span className='rotate-[45deg]'>
							<FaArrowUpLong />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
