import React from "react";

import { Link } from "react-router-dom";

import MainHome from "./MainHome";
import AsideHome from "./Navigation";

const HomeContent = () => {
	return (
		<>
			<section id='home'>
				<div className='wrapper flex flex-col xl:flex xl:flex-row gap-5 items-center pl-6'>
					<AsideHome />
					<MainHome />
				</div>
			</section>
		</>
	);
};

export default HomeContent;
