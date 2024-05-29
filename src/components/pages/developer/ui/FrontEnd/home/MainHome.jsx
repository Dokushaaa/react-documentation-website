import React from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

const MainHome = () => {
	const countImg = ["1", "2", "3", "4", "5", "6"];
	return (
		<>
			<main className='w-auto xl:w-5/6 h-auto xl:h-auto'>
				<div className='container px-2 xl:px-4'>
					<div className='flex items-center flex-col xl:items-start'>
						<small className='flex  items-center gap-1 text-stone-400'>
							Guide Title <FaAngleDown />
						</small>
						<h2 className='text-4xl'>
							Documentation <span className='text-[#e22ac4]'>Title.</span>
						</h2>
						<p className='text-lg'>
							Complete documentation of the Framer Motion animation library. A
							production-ready motion library for React.
						</p>
						<button className='flex items-center gap-2 hover:border-purple hover:text-purple border-b-2 py-2 border-content '>
							Get Started <FaArrowRight />
						</button>
						{/* map this if many entry */}
					</div>
					<div className=' xl:w-auto w-auto flex xl:grid xl:grid-cols-3 flex-col items-center'>
						{countImg.map((item, i) => (
							<>
								<div key={i}>
									<img
										src='https://via.placeholder.com/375x375'
										alt=''
										className='object-cover rounded-2xl py-5'
									/>
								</div>
							</>
						))}
						<p className='block xl:hidden'>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default MainHome;
