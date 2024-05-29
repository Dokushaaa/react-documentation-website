import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [showNav, setShowNav] = React.useState(false);
	const handleShowNav = () => {
		setShowNav(!showNav);
	};
	return (
		<aside className='w-full xl:w-1/6 xl:h-screen bg-primary h-auto px-5 xl:px-0'>
			<div className='nav-container sticky top-0'>
				<div className='overflow-y-auto xl:max-h-[calc(100vh)] flex justify-between  flex-col'>
					<div className='py-4  xl:hidden flex flex-col border-2 border-purple rounded-xl mt-6 justify-between items-center '>
						<button
							className='flex items-center text-2xl gap-2 mb-4'
							onClick={handleShowNav}>
							Expander
							<FaAngleDown
								className={`${
									showNav === true
										? "transition-all duration-500 rotate-180"
										: "transition-all duration-500 rotate-0"
								}`}
							/>
						</button>
						<small className='border-b border-content text-[15px] flex items-center'>
							Navigation <FaAngleRight /> home <FaAngleRight /> getting started
						</small>
					</div>
					<ul
						className={`nav-wrapper xl:pl-12 pr-5 mb-14 ${
							showNav === true
								? "h-auto transition-all duration-500"
								: "hidden xl:block h-0 xl:h-auto transition-all duration-500"
						}`}>
						<ul className='parent'>
							<h3 className='mb-1'>Getting Started</h3>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
						</ul>
						<ul className='parent'>
							<h3 className='mb-1'>Parent</h3>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
						</ul>
						<ul className='parent'>
							<h3 className='mb-1'>Parent</h3>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
						</ul>
						<ul className='parent'>
							<h3 className='mb-1'>Parent</h3>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
							<Link>
								<li>Child</li>
							</Link>
						</ul>
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default Navigation;
