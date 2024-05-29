import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const UiFooter = () => {
	return (
		<>
			<footer className='w-full  bg-purple/40 text-content px-2 mt-5 pt-12'>
				<div className='py-5'>
					<div className='flex flex-col xl:flex-row xl:gap-10 gap-5 justify-center w-full items-center'>
						<img
							src='https://via.placeholder.com/100x100'
							alt=''
						/>
						<h2 className='text-content'>React_documentation;</h2>
					</div>
					<h4 className='text-content text-center'>Liked our content?</h4>
					<p className='text-center'>
						Feel free to subscribe to our newsletter for upcoming updates sent
						your way!
					</p>
					<form
						action=''
						className='flex items-center justify-center relative max-w-[700px] mx-auto'>
						<input
							type='text'
							className='p-4 rounded-xl placeholder:opacity-60 w-full mx-5'
							placeholder='Your Email-Address'
						/>
						<button className='text-content bg-purple p-3 rounded-xl absolute top-1 right-7'>
							Join us!
						</button>
					</form>
					<ul className='flex justify-center gap-10 flex-wrap my-5'>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaFacebook />
								@R_doc;_fa
							</Link>
						</li>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaTwitter /> @R_doc;_x
							</Link>
						</li>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaInstagram /> @R_doc;_ig
							</Link>
						</li>
						<li>
							<Link className='flex items-center gap-2 text-2xl'>
								<FaYoutube /> @R_doc;_yt
							</Link>
						</li>
					</ul>
					<div className='copyright-notice pt-6 mt-6  border-t border-content text-center '>
						<p className='mb-0'>&copy;Dokusha 2024. All Rights Reserved</p>
						{/* todo: delete for deployment: { */}
						<p>Made for educational purposes only for now</p>
						{/* } */}
					</div>
				</div>
			</footer>
		</>
	);
};

export default UiFooter;
