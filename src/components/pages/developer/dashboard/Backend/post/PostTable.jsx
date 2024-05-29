import React from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
	setIsActive,
	setIsAdd,
	setIsDelete,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import ModalConfirm from "../../../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../../../partials/modals/ModalDelete";
import NoData from "../../../../../partials/NoData";
import TableLoader from "../../../../../partials/TableLoader";
import useQueryData from "../../../../../custom-hook/useQueryData";

const PostTable = ({ isLoading, post, isFetching, setItemEdit }) => {
	let counter = 1;
	const { store, dispatch } = React.useContext(StoreContext);
	const [isArchiving, setIsArchiving] = React.useState(0);
	const [id, setId] = React.useState("");

	// switches row to inacvtive state
	const handleArchive = (item) => {
		dispatch(setIsActive(true));
		setId(item.post_aid);
		// dispatch(setIsArchive(0));
		setIsArchiving(0);
	};
	// edits the parent row's values:
	const handleEdit = (item) => {
		setItemEdit(item);
		dispatch(setIsAdd(true));
	};
	// swtitches row to active state
	const handleRestore = (item) => {
		dispatch(setIsActive(true));
		setId(item.post_aid);
		// dispatch(setIsArchive(1));
		setIsArchiving(1);
	};
	// deletes row
	const handleDelete = (item) => {
		dispatch(setIsDelete(true));
		setId(item.post_aid);
	};
	const { data: category } = useQueryData(
		"/v1/category", // endpoint
		"get", // method
		"category" // key
	);
	// console.log();
	// if ( === "wes") {
	// }

	const getTrending = () =>
		post?.data.filter((item) => item.post_category_id == 1);
	const getFeatured = () =>
		post?.data.filter((item) => item.post_category_id == 2);
	const getFashionNStyle = () =>
		post?.data.filter((item) => item.post_category_id == 3);
	const getPopular = () =>
		post?.data.filter((item) => item.post_category_id == 4);
	const getHeadline = () =>
		post?.data.filter((item) => item.post_category_id == 5);
	return (
		<>
			<div>
				<div className='table-wrapper relative'>
					{/* {isFetching && <SpinnerFetching />} */}
					<table>
						<thead className='border-b border-content '>
							<tr>
								<th className='w-[100px]'>Seq ID : Attr Id</th>
								<th className='w-[100px]'>Title</th>
								<th className='w-[100px]'>Category</th>
								<th className='w-[100px]'>Tag</th>
								<th className='w-[100px]'>Featured</th>
								<th className='w-[200px]'>Image</th>
								<th className='w-[180px]'>Author</th>
								<th className='w-[250px]'>Article</th>
								<th className='w-[100px]'>IsActive</th>

								<th className='w-[100px]'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{isLoading && (
								<tr>
									<td colSpan={9}>
										{isLoading && (
											<TableLoader
												count='20'
												cols='7'
											/>
										)}
									</td>
								</tr>
							)}
							{post?.data.length === 0 && (
								<tr>
									<td colSpan={9}>
										<NoData />
									</td>
								</tr>
							)}
							{/* {`${}`?.data.map((item, key) => ( */}
							{/* {!isLoading &&
								getHeadline()
									.slice(0, 10)
									.map((item, key) => (
										<tr
											className='td-post'
											key={key}>
											<td>
												{counter++} : {item.post_aid}
											</td>
											<td>{item.post_title}</td>
											<td>{item.category_title}</td>
											<td className='text-balance  break-all'>
												{item.post_image}
											</td>
											<td>{item.post_author}</td>
											<td>{item.post_article}</td>
											<td>
												{item.post_is_active === 1 ? "Active" : "In-Active"}
											</td>
											<td>{item.post_datetime}</td>
											<td>{item.post_created}</td>
											<td className='table-action'>
												<ul>
													{item.post_is_active ? (
														<>
															<li>
																<button
																	className='tooltip'
																	data-tooltip='Archive'
																	onClick={() => handleArchive(item)}>
																	<PiArchive />
																</button>
															</li>
															<li>
																<button
																	className='tooltip'
																	onClick={() => handleEdit(item)}
																	data-tooltip='Edit'>
																	<LiaEdit />
																</button>
															</li>
														</>
													) : (
														<>
															<li>
																<button
																	className='tooltip'
																	data-tooltip='Restore'
																	onClick={() => handleRestore(item)}>
																	<LiaHistorySolid />
																</button>
															</li>
															<li>
																<button
																	className='tooltip'
																	data-tooltip='Delete'
																	onClick={() => handleDelete(item)}>
																	<LiaTrashAltSolid />
																</button>
															</li>
														</>
													)}
												</ul>
											</td>
										</tr>
									))} */}

							{post?.data.map((item, key) => (
								<tr
									className='td-post'
									key={key}>
									<td>
										{counter++} : {item.post_aid}
									</td>
									<td>{item.post_title}</td>
									<td>{item.category_title}</td>
									<td>{item.tag_title}</td>{" "}
									<td>{item.post_is_featured === 1 ? "Yes" : "No"}</td>
									<td className='text-balance  break-all'>{item.post_image}</td>
									<td>{item.post_author}</td>
									<td>{item.post_article}</td>
									<td>{item.post_is_active === 1 ? "Active" : "In-Active"}</td>
									<td className='table-action'>
										<ul>
											{item.post_is_active ? (
												<>
													<li>
														<button
															className='tooltip'
															data-tooltip='Archive'
															onClick={() => handleArchive(item)}>
															<PiArchive />
														</button>
													</li>
													<li>
														<button
															className='tooltip'
															onClick={() => handleEdit(item)}
															data-tooltip='Edit'>
															<LiaEdit />
														</button>
													</li>
												</>
											) : (
												<>
													<li>
														<button
															className='tooltip'
															data-tooltip='Restore'
															onClick={() => handleRestore(item)}>
															<LiaHistorySolid />
														</button>
													</li>
													<li>
														<button
															className='tooltip'
															data-tooltip='Delete'
															onClick={() => handleDelete(item)}>
															<LiaTrashAltSolid />
														</button>
													</li>
												</>
											)}
										</ul>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{store.isActive && (
				<ModalConfirm
					position={"center"}
					queryKey={"post"}
					endpoint={`/v1/post/active/${id}`}
					isArchiving={isArchiving}
				/>
			)}
			{store.isDelete && (
				<ModalDelete
					position={"center"}
					queryKey={"post"}
					endpoint={`/v1/post/${id}`}
				/>
			)}
		</>
	);
};

export default PostTable;
