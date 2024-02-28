import React from "react";

const Footer = () => {
	return (
		<footer className='bg-gray-100 border-t py-4'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between'>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Help</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#'>FAQ</a>
							</li>
							<li>
								<a href='#'>Contact Us</a>
							</li>
							<li>
								<a href='#'>Report a Problem</a>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>About</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#'>About Us</a>
							</li>
							<li>
								<a href='#'>Careers</a>
							</li>
							<li>
								<a href='#'>Investor Relations</a>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Legal</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#'>Terms of Use</a>
							</li>
							<li>
								<a href='#'>Privacy Policy</a>
							</li>
							<li>
								<a href='#'>Cookie Preferences</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
