import React from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
	setIsActive,
	setIsAdd,
	setIsDelete,
} from "../../../../../../store/StoreAction";
import SpinnerFetching from "../../../../../partials/spinners/SpinnerFetching";
import { StoreContext } from "../../../../../../store/StoreContext";
import TableLoader from "../../../../../partials/TableLoader";
import NoData from "../../../../../partials/NoData";

const TagTable = ({ isLoading, isFetching, tag, setItemEdit }) => {
	const { store, dispatch } = React.useContext(StoreContext);
	const [isArchiving, setIsArchiving] = React.useState(0);
	const [id, setId] = React.useState("");

	let counter = 1;

	const handleArchive = (item) => {
		dispatch(setIsActive(true));
		setId(item.tag_aid);
		setIsArchiving(0);
	};
	const handleRestore = (item) => {
		dispatch(setIsActive(true));
		setId(item.tag_aid);
		setIsArchiving(1);
	};

	const handleDelete = (item) => {
		dispatch(setIsDelete(true));
		setId(item.tag_aid);
	};

	const handleHandle = (item) => {
		dispatch(setIsAdd(true));
		setItemEdit(item);
	};

	return (
		<>
			<div className='table-wrapper relative'>
				{isFetching && <SpinnerFetching />}
				<table>
					<thead>
						<tr>
							<th className='w-[10px]'>#</th>
							<th className='w-[90%]'>Tag Name</th>
							<th className='w-[100px]'>Action</th>
						</tr>
					</thead>
					<tbody>
						{isLoading && (
							<tr>
								<td colSpan={9}>
									<TableLoader
										count='20'
										cols='4'
									/>
								</td>
							</tr>
						)}

						{tag?.data.length === 0 && (
							<tr>
								<td colSpan={9}>
									<NoData />
								</td>
							</tr>
						)}

						{tag?.data.map((item, key) => (
							<tr key={key}>
								<td>{counter++}</td>
								<td>{item.tag_title}</td>
								<td className='table-action'>
									<ul>
										{item.tag_is_active ? (
											<>
												<li>
													<button
														onClick={() => handleHandle(item)}
														className='tooltip'
														data-tooltip='Edit'>
														<LiaEdit />
													</button>
												</li>
												<li>
													<button
														onClick={() => handleArchive(item)}
														className='tooltip'
														data-tooltip='Archive'>
														<PiArchive />
													</button>
												</li>
											</>
										) : (
											<>
												<li>
													<button
														onClick={() => handleRestore(item)}
														className='tooltip'
														data-tooltip='Restore'>
														<LiaHistorySolid />
													</button>
												</li>
												<li>
													<button
														onClick={() => handleDelete(item)}
														className='tooltip'
														data-tooltip='Delete'>
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

			{store.isActive && (
				<ModalConfirmed
					position='center'
					queryKey='tag'
					endpoint={`/v1/tag/active/${id}`}
					isArchiving={isArchiving}
				/>
			)}
			{store.isDelete && (
				<ModalDelete
					position='center'
					endpoint={`/v1/tag/${id}`}
					queryKey='tag'
				/>
			)}
		</>
	);
};

export default TagTable;
