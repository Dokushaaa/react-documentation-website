import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import DbLogo from "../../../../partials/svg/DbLogo";
import { AiOutlineMessage } from "react-icons/ai";
import { motion } from "framer-motion";

const DbNavigation = ({ menu }) => {
	const handleChangeTab = (navChange) => {
		setPageHanlder(navChange);
	};
	const navList = [
		{
			menu: "dashboard",
			url: "/dashboard",
			icon: <AiOutlineMessage />,
			name: "Dashboard",
		},
		{
			menu: "users",
			url: "/users",
			icon: <AiOutlineMessage />,
			name: "Users",
		},
		{
			menu: "post",
			url: "/post",
			icon: <AiOutlineMessage />,
			name: "Post",
		},

		{
			menu: "category",
			url: "/category",
			icon: <MdOutlineDashboard />,
			name: "Category",
		},

		{
			menu: "tag",
			url: "/tag",
			icon: <MdOutlineDashboard />,
			name: "Tag",
		},
	];

	return (
		<>
			<aside className='px-4 py-6 w-[250px] h-screen border-r  border-line'>
				{/* fixed top-0 */}
				<div className='flex flex-col items-center justify-center gap-5'>
					<DbLogo />
					<h2 className='mb-0 text-balance w-full px-5  text-justify transition-all duration-500'>
						Bloge Posting
					</h2>
				</div>

				<ul className='dbnav'>
					{navList.map((item, i) => (
						<motion.li
							className={`nav-link ${menu === item.menu ? "active" : ""}`}
							key={i}
							initial={{ opacity: 0, x: "-10px" }}
							animate={{ opacity: 1, x: "0px" }}
							exit={{ opacity: 0, x: "-10px" }}
							transition={{ duration: 1, delay: i * 0.2 }}>
							<Link to={`${item.url}`}>
								{item.icon} {item.name}
							</Link>
						</motion.li>
					))}
				</ul>
			</aside>
		</>
	);
};

export default DbNavigation;
