import React from "react";
import { Link } from "react-router-dom";
import CategoryTable from "./CategoryTable";
import { FiPlus } from "react-icons/fi";
import ModalAddCategory from "./ModalAddCategory";

import DbNavigation from "../DbNavigation";
import DbHeader from "../DbHeader";

import { StoreContext } from "../../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../../store/StoreAction";
import ModalError from "../../../../../partials/modals/ModalError";
import Toast from "../../../../../partials/Toast";

import useQueryData from "../../../../../custom-hook/useQueryData";
import { motion, AnimatePresence } from "framer-motion";
import Searchbar from "../../../../../partials/frontend_partials/Searchbar";

const Category = () => {
	const { store, dispatch } = React.useContext(StoreContext);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	const [itemEdit, setItemEdit] = React.useState("");
	const [pageHandler, setPageHanlder] = React.useState("Category");

	const {
		isLoading,
		isFetching,
		error,
		data: category,
	} = useQueryData(
		"/v1/category", // endpoint
		"get", // method
		"category" // key
	);

	const handleAdd = () => {
		dispatch(setIsAdd(true));
		setItemEdit(null);
	};
	return (
		<section className='flex overflow-hidden'>
			<DbNavigation menu='category' />

			<main className='w-[calc(100%-250px)] overflow-x-hidden'>
				<DbHeader />

				<div className='flex '>
					<div
						className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}>
						<div className='flex justify-between items-center'>
							<h1>Category</h1>
							<Searchbar
								setIsSeach={setIsSearch}
								setKeyword={setKeyword}
							/>
						</div>

						<div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
							<h2>Seacrh</h2>
							<button
								className='btn btn--accent'
								onClick={handleAdd}>
								<FiPlus /> New
							</button>
						</div>
						<CategoryTable
							isLoading={isLoading}
							category={category}
							isFetching={isFetching}
							setItemEdit={setItemEdit}
						/>
					</div>
				</div>
			</main>
			<AnimatePresence>
				{store.isAdd && <ModalAddCategory itemEdit={itemEdit} />}
			</AnimatePresence>

			{store.error && <ModalError position='center' />}
			{store.success && <Toast />}
		</section>
	);
};

export default Category;
