import React from "react";
import {
	FaAngleDown,
	FaBars,
	FaFacebook,
	FaInstagram,
	FaSearch,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UiHeader = () => {
	const [showNav, setShowNav] = React.useState(false);
	const handleShowNav = () => setShowNav(!showNav);
	return (
		<header>
			<div className='bg-purple text-white'>
				<div className='container'>
					<div className='flex justify-between items-center py-2'>
						<ul className='xl:flex gap-4 text-2xl hidden'>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaFacebook />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaTwitter />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='#'>
									<FaYoutube />
								</Link>
							</li>
						</ul>
						<ul className='flex gap-4 items-center'>
							<li>
								<h4 className='mb-0'>React_documentation;</h4>
							</li>
						</ul>
						<ul className='flex gap-4 text-lg'>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='/login'>
									Login
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-white'
									to='/register'>
									Register
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='relative'>
				<div className=' border-b border-purple'>
					<div className='container flex justify-between items-center sticky top-0 bg-primary py-4'>
						<h1 className='mb-0'>Documentation</h1>
						<div className='flex gap-5 items-center'>
							<button className='size-8 bg-content text-primary flex justify-center items-center rounded-lg text-sm'>
								<FaSearch />
							</button>
							<button
								className='text-2xl xl:hidden'
								onClick={handleShowNav}>
								<FaBars />
							</button>
						</div>
					</div>

					<nav
						className={`xl:h-auto xl:!max-h-[30px] xl:absolute xl:top-5 xl:right-[22.5rem] text-xl ${
							showNav ? "navshow" : ""
						}`}>
						<ul className='space-y-6 p-4 xl:flex xl:gap-5 xl:space-y-0 xl:p-0'>
							<li>
								<Link
									className='flex items-center gap-5 font-bold transition-color hover:text-accent active:text-accent'
									to='/home'>
									Home <FaAngleDown />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 font-bold transition-color hover:text-accent'
									to='#'>
									Documentation <FaAngleDown />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 font-bold transition-color hover:text-accent'
									to='#'>
									About <FaAngleDown />
								</Link>
							</li>{" "}
							<li>
								<Link
									className='flex items-center gap-5 font-bold transition-color hover:text-accent'
									to='#'>
									Contact Us <FaAngleDown />
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default UiHeader;
