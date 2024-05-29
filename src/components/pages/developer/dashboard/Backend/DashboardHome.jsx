import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import DbNavigation from "./DbNavigation";
import DbHeader from "./DbHeader";
import useQueryData from "../../../../custom-hook/useQueryData";
import { Link } from "react-router-dom";

const DashboardHome = () => {
	const { store, dispatch } = React.useContext(StoreContext);
	// const { store, dispatch } = React.useContext(StoreContext);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	const [itemEdit, setItemEdit] = React.useState(null);
	const [pageHandler, setPageHanlder] = React.useState("Dashboard");

	// post counter
	const { data: post } = useQueryData(
		isSearch ? "/v1/post/search" : "/v1/post", // endpoint
		isSearch ? "post" : "get", // method
		"post", //key
		// ["post", isSearch],
		{
			searchValue: keyword,
		}
	);

	return (
		<section className='flex overflow-x-hidden'>
			{/* set tab menu if active later */}
			<DbNavigation menu='dashboard' />
			<main className='w-[calc(100%-250px)] '>
				<DbHeader />
				<div className='flex flex-row items-center'>
					<div className={`main-wrapper  transition-all px-4 py-3 w-full`}>
						<div className='flex justify-between items-center'>
							<h1 className='leading-none mb-0'>{pageHandler}</h1>
							<button className='btn btn--accent'>
								<Link
									className='px-2'
									to='http://localhost/phpmyadmin/index.php?route=/database/structure&db=react_bloge'
									target='_blank'>
									Database Link
								</Link>
							</button>
						</div>
						<div className='tab flex justify-between items-center my-8 border-b border-line '>
							{/* <StudentSearchBar
								setIsSeach={setIsSeach}
								setKeyword={setKeyword}
							/> */}
							<h4>---Search bar placeholder---</h4>
							{/* <button
								className='btn btn--accent flex items-center gap-2'
								onClick={handleAdd}>
								Add New
								<FiPlus />
							</button> */}
						</div>
						<ul className='items-count'>
							{/* post DB */}
							<li className='items-card'>
								<h1>Post Section</h1>
								<p className='text-2xl'>
									Items Count:
									<span
										className={`items-count-span px-2 ${
											post?.data.length === 0 ? "text-red-400" : "text-accent"
										}`}>
										{post?.data.length}
										{/* <br /> <br /> */}
										{/* {post?.data.map((item, key) => key == 0 && item.post_title)} */}
									</span>
								</p>
								<small className='underline text-stone-500'>
									<Link to='/post'>Click here to view Home Table</Link>
								</small>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</section>
	);
};

export default DashboardHome;
