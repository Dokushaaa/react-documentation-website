import React from "react";
import { FiPlus } from "react-icons/fi";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hook/useQueryData";
import Toast from "../../../../../partials/Toast";
import ModalError from "../../../../../partials/modals/ModalError";
import DbHeader from "../DbHeader";
import DbNavigation from "../DbNavigation";
// changeables
import { FaCertificate, FaCode } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import ModalAddPost from "./ModalAddPost";
import PostTable from "./PostTable";
import { GrProjects } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import Searchbar from "../../../../../partials/frontend_partials/Searchbar";
const PostHome = () => {
	const { store, dispatch } = React.useContext(StoreContext);
	// const { store, dispatch } = React.useContext(StoreContext);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	const [itemEdit, setItemEdit] = React.useState(null);
	const [pageHandler, setPageHanlder] = React.useState("Post");
	const {
		isLoading,
		isFetching,
		error,
		data: post,
	} = useQueryData(
		isSearch ? "/v1/post/search" : "/v1/post", // endpoint
		isSearch ? "post" : "get", // method
		"post", //key
		// ["post", isSearch],
		{
			searchValue: keyword,
		}
	);
	const { data: category } = useQueryData(
		"/v1/category", // endpoint
		"get", // method
		"category" // key
	);
	// add post row:
	const handleAdd = () => {
		// callbacks via store folder
		dispatch(setIsAdd(true));
		setItemEdit(null);
	};

	return (
		<section className='flex overflow-hidden'>
			<DbNavigation menu='post' />

			<main className='w-[calc(100%-250px)] overflow-x-hidden'>
				<DbHeader />

				<div className='flex '>
					<div
						className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}>
						<div className='flex justify-between items-center'>
							<h1>Post Database</h1>
						</div>

						<div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
							<div className='input-wrap text-content'>
								<Searchbar
									setIsSeach={setIsSearch}
									setKeyword={setKeyword}
								/>
							</div>
							<div className='btn-div'>
								<button
									className='btn btn--accent'
									onClick={handleAdd}>
									<FiPlus /> New
								</button>
							</div>
						</div>

						{pageHandler === "Post" && (
							<PostTable
								setItemEdit={setItemEdit}
								isLoading={isLoading}
								post={post}
								isFetching={isFetching}
								category={category}
							/>
						)}
					</div>
				</div>
			</main>
			<AnimatePresence>
				{store.isAdd && (
					<ModalAddPost
						itemEdit={itemEdit}
						position='center'
					/>
				)}
			</AnimatePresence>
			{store.success && <Toast />}
			{store.error && <ModalError position={"center"} />}
		</section>
	);
};

export default PostHome;
