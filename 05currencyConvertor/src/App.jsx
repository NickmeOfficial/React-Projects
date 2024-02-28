import React from "react";
import QuoteCard from "./components/Card/Card";
function App() {
	const cardData = [
		{
			name: "John Doe",
			title: "Software Engineer",
			imageUrl: "https://via.placeholder.com/150",
		},
	];

	return (
		<>
			<div className='flex flex-wrap justify-center'>
				{cardData.map((data, index) => (
					<div
						className='max-w-xs mx-2 my-2 bg-white shadow-lg rounded-lg overflow-hidden'
						key={index}>
						<img
							className='w-full'
							src={data.imageUrl}
							alt={data.name}
						/>
						<div className='p-4'>
							<h2 className='text-xl font-bold'>{data.name}</h2>
							<p className='text-sm text-gray-600'>
								{data.title}
							</p>
						</div>
					</div>
				))}
			</div>
			<QuoteCard
				quote='This is awesome. Will be very useful for my design workflow on my tablet devices.'
				author='Shirish Shikhrakar'
				jobTitle='Chief Creative Officer'
				company='Programiz'
				profileImage='https://via.placeholder.com/150'
			/>
		</>
	);
}

export default App;
