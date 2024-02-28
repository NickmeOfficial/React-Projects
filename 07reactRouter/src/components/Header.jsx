import React from "react";

const Header = () => {
	return (
		<header className='bg-gray-100 border-b'>
			<div className='container mx-auto px-4 py-6'>
				<div className='flex items-center justify-between'>
					<div className='text-lg font-bold'>
						<a href='#'>Amazon</a>
					</div>
					<div className='flex items-center space-x-4'>
						<input
							type='text'
							className='border border-gray-300 px-3 py-2 rounded-md'
							placeholder='Search'
						/>
						<button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
							Search
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;