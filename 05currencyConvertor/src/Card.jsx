import React from "react";

const Card = ({ name, title, imageUrl }) => {
	return (
		<div className='flex flex-col bg-white shadow-md rounded-md p-6 max-w-xs mx-auto'>
			<div className='flex justify-center items-center mb-4'>
				<img
					src={imageUrl}
					alt='Avatar'
					className='w-32 h-32 object-cover rounded-full'
				/>
			</div>
			<div className='text-center'>
				<p className='text-xl font-semibold mb-2'>{name}</p>
				<p className='text-gray-500 mb-4'>{title}</p>
				<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
					Follow
				</button>
			</div>
		</div>
	);
};

export default Card;
