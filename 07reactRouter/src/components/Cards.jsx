import React from "react";

const Cards = () => {
	return (
		<main className='px-4 py-8'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{Array.from({ length: 12 }).map((_, index) => (
					<div
						key={index}
						className='bg-white border border-gray-300 p-4 rounded-md'>
						<img
							src='https://via.placeholder.com/150'
							alt='Product'
							className='w-full h-48 object-cover mb-4 rounded-md'
						/>
						<h2 className='text-xl font-bold mb-2'>Product Name</h2>
						<p className='text-gray-500 mb-4'>
							Product Description
						</p>
						<div className='flex items-center justify-between'>
							<span className='text-lg font-bold'>$99.99</span>
							<button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
								Add to Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Cards;