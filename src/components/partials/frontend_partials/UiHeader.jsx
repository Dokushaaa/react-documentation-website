import React from "react";
import {
	FaAngleDown,
	FaBars,
	FaFacebook,
	FaInstagram,
	FaMoon,
	FaSearch,
	FaSun,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs";

const UiHeader = () => {
	const [showNav, setShowNav] = React.useState(false);
	const handleShowNav = () => setShowNav(!showNav);
	function handleChangeColorTheme() {
		if (
			localStorage.getItem("theme") !== null &&
			localStorage.getItem("theme") === "dark"
		) {
			localStorage.setItem("theme", "white");
			document.querySelector("body").setAttribute("class", "");
			document.querySelector("body").setAttribute("class", "white");
		} else {
			localStorage.setItem("theme", "dark");
			document.querySelector("body").setAttribute("class", "");
			document.querySelector("body").setAttribute("class", "dark");
		}
	}
	React.useEffect(() => {
		if (localStorage.getItem("theme") !== null) {
			document.querySelector("body").setAttribute("class", "");
			document
				.querySelector("body")
				.setAttribute("class", localStorage.getItem("theme"));
		}
	}, [localStorage.getItem("theme")]);
	const readTheme = localStorage.getItem("theme");
	const [showMode, setModeInfo] = React.useState(false);

	const handleModeInfo = () => {
		setModeInfo(!showMode);
	};

	return (
		<header>
			<div className='bg-purple text-content'>
				<div className='container'>
					<div className='flex justify-between items-center py-2'>
						<ul className='xl:flex gap-4 text-2xl hidden'>
							<li>
								<Link
									className='flex items-center gap-5 text-content'
									to='#'>
									<FaFacebook />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-content'
									to='#'>
									<FaInstagram />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-content'
									to='#'>
									<FaTwitter />
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-content'
									to='#'>
									<FaYoutube />
								</Link>
							</li>
						</ul>
						<ul className='flex gap-4 items-center'>
							<li>
								<h4 className='mb-0 '>React_documentation;</h4>
							</li>
						</ul>
						<ul className='flex gap-4 text-lg '>
							<li>
								<Link
									className='flex items-center gap-5 text-content'
									to='/login'>
									Login
								</Link>
							</li>
							<li>
								<Link
									className='flex items-center gap-5 text-content'
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
						<div className='flex items-center gap-2'>
							<h1 className='mb-0'>Documentation</h1>
							<button onClick={() => handleChangeColorTheme()}>
								<BsMoonStarsFill className='rotate-120 text-content' />
							</button>
						</div>
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
