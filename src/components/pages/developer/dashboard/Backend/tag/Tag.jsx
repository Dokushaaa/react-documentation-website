import React from "react";
import { FiPlus } from "react-icons/fi";
import DbHeader from "../DbHeader";
import DbNavigation from "../DbNavigation";
import { setIsAdd } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hook/useQueryData";
import ModalError from "../../../../../partials/modals/ModalError";
import Toast from "../../../../../partials/Toast";

import ModalAddTag from "./ModalAddTag";
import TagTable from "./TagTable";
import { motion, AnimatePresence } from "framer-motion";
import Searchbar from "../../../../../partials/frontend_partials/Searchbar";
const Tag = () => {
	const { store, dispatch } = React.useContext(StoreContext);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	const [itemEdit, setItemEdit] = React.useState("");
	const [pageHandler, setPageHanlder] = React.useState("Tag");

	const {
		isLoading,
		isFetching,
		error,
		data: tag,
	} = useQueryData(
		"/v1/tag", // endpoint
		"get", // method
		"tag" // key
	);

	const handleAdd = () => {
		dispatch(setIsAdd(true));
		setItemEdit(null);
	};
	return (
		<section className='flex overflow-hidden'>
			<DbNavigation
				pageHandler={pageHandler}
				menu='tag'
			/>

			<main className='w-[calc(100%-250px)] overflow-x-hidden'>
				<DbHeader />

				<div className='flex '>
					<div
						className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}>
						<div className='flex justify-between items-center'>
							<h1>tag</h1>
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
						<TagTable
							isLoading={isLoading}
							tag={tag}
							isFetching={isFetching}
							setItemEdit={setItemEdit}
						/>
					</div>
				</div>
			</main>

			<AnimatePresence>
				{store.isAdd && <ModalAddTag itemEdit={itemEdit} />}
			</AnimatePresence>

			{store.error && <ModalError position='center' />}
			{store.success && <Toast />}
		</section>
	);
};

export default Tag;
