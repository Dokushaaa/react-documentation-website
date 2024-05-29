import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import * as Yup from "yup";
import { string } from "yup";
import {
	setError,
	setIsAdd,
	setMessage,
	setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
	InputFileUpload,
	InputSelect,
	InputText,
	InputTextArea,
} from "../../../../../helpers/FormInputs";
import { queryData } from "../../../../../helpers/queryData";
import ModalWrapper from "../../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";
import useUploadPhoto from "../../../../../custom-hook/useUploadPhoto";
import { devBaseImgUrl } from "../../../../../helpers/functions-general";
import useQueryData from "../../../../../custom-hook/useQueryData";
import { motion } from "framer-motion";

const ModalAddPost = ({ itemEdit, position }) => {
	const { dispatch, store } = React.useContext(StoreContext);
	const handleClose = () => dispatch(setIsAdd(false));
	// add upload
	const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
		`/v1/upload/photo`,
		dispatch
	);
	// category add-on
	const {
		isLoading,
		isFetching,
		error,
		data: category,
	} = useQueryData(
		`/v1/category`, // endpoint
		"get", // method
		"category" // key
	);
	// tag add-on
	const { data: tag } = useQueryData(
		`/v1/tag`, // endpoint
		"get", // method
		"tag" // key
	);

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (values) =>
			queryData(
				itemEdit ? `/v1/post/${itemEdit.post_aid}` : `/v1/post`,
				itemEdit ? "put" : "post",
				// `/v1/post`,
				// `post`,
				values
			),
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["post"] });
			if (data.success) {
				dispatch(setIsAdd(false));
				dispatch(setSuccess(true));
				dispatch(setMessage(`Successful Operation`));
			} else {
				dispatch(setError(true));
				dispatch(setMessage(data.error));
			}
		},
	});

	const initVal = {
		post_title: itemEdit ? itemEdit.post_title : "",
		post_category_id: itemEdit ? itemEdit.post_category_id : "",
		post_tag_id: itemEdit ? itemEdit.post_tag_id : "",
		post_is_featured: itemEdit ? itemEdit.post_is_featured : 0,
		post_image: itemEdit ? itemEdit.post_image : "",
		post_author: itemEdit ? itemEdit.post_author : "",
		post_article: itemEdit ? itemEdit.post_article : "",
		post_published_date: itemEdit ? itemEdit.post_published_date : "",
	};
	const yupSchema = Yup.object({
		// no-image no-is-featured??
		post_title: string().required("Headline Required*"),
		post_tag_id: string().required("Article Required*"),
		post_category_id: string().required("Article Required*"),
		post_author: string().required("Description Required*"),
		post_article: string().required("Description Required*"),
	});
	return (
		<>
			<ModalWrapper position={position}>
				<motion.div
					className='main-modal w-[900px] bg-primary text-content'
					initial={{ opacity: 0, y: "50px" }}
					animate={{ opacity: 1, y: "0" }}
					exit={{ opacity: 0, y: "50px" }}>
					<div className='modal-header p-4 relative'>
						<h2>New Entry?</h2>
						<button
							className='absolute top-[25px] right-4'
							onClick={handleClose}>
							<LiaTimesSolid />
						</button>
					</div>
					<div className='modal-body p-4'>
						<Formik
							initialValues={initVal}
							validationSchema={yupSchema}
							onSubmit={async (values) => {
								uploadPhoto();
								mutation.mutate({
									...values,
									post_image:
										(itemEdit && itemEdit.post_image === "") || photo
											? photo === null
												? itemEdit.post_image
												: photo.name
											: values.post_image,
									post_article: values.post_article.replace(/\\/g, ""),
								});
							}}>
							<Form
								action=''
								className='flex flex-col '>
								<div className='grow overflow-y-auto mb-5'>
									<div className='input-wrap'>
										<InputText
											label='Post Title'
											type='text'
											name='post_title'
										/>
									</div>
									<div className='grid grid-cols-[1fr_2fr] gap-10'>
										<div className='left'>
											{" "}
											<div className='input-wrap'>
												{photo || (itemEdit && itemEdit.post_image !== "") ? (
													<img
														src={
															photo
																? URL.createObjectURL(photo) // preview
																: itemEdit.post_image // check db
																? devBaseImgUrl + "/" + itemEdit.post_image
																: null
														}
														alt='Photo'
														className='rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto'
													/>
												) : (
													<span className=' w-full h-[200px] flex items-center justify-center'>
														<span className='text-accent mr-1'>
															Drag & Drop
														</span>{" "}
														photo here or{" "}
														<span className='text-accent ml-1'>Browse</span>
													</span>
												)}

												{(photo !== null ||
													(itemEdit && itemEdit.post_image !== "")) && (
													<span className='min-h-10 flex items-center justify-center'>
														<span className='text-accent mr-1'>
															Drag & Drop
														</span>{" "}
														photo here or{" "}
														<span className='text-accent ml-1'>Browse</span>
													</span>
												)}

												{/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
												<InputFileUpload
													label='Post Photo'
													name='Photo'
													type='file'
													id='myFile'
													accept='image/*'
													title='Upload photo'
													onChange={(e) => handleChangePhoto(e)}
													onDrop={(e) => handleChangePhoto(e)}
													className='opacity-0  absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full'
												/>
											</div>
											<div className='input-wrap'>
												<InputSelect
													label='Is Featured?'
													type='text'
													name='post_is_featured'>
													<option hidden>Select</option>
													<option value='0'>No</option>
													<option value='1'>Yes</option>
												</InputSelect>
											</div>
											<div className='input-wrap'>
												<InputSelect
													label='Tag'
													type='text'
													name='post_tag_id'>
													{tag?.data.map((item, key) => (
														<React.Fragment key={key}>
															<option hidden>Select</option>
															<option value={item.tag_aid}>
																{item.tag_title}
															</option>
														</React.Fragment>
													))}
												</InputSelect>
											</div>
											<div className='input-wrap'>
												<InputSelect
													label='Category'
													type='text'
													name='post_category_id'>
													{category?.data.map((item, key) => (
														<React.Fragment key={key}>
															<option hidden>Select</option>
															<option value={item.category_aid}>
																{item.category_title}
															</option>
														</React.Fragment>
													))}
												</InputSelect>
											</div>
											<div className='input-wrap'>
												<InputText
													label='Post Author'
													type='text'
													name='post_author'
												/>
											</div>
											<div className='input-wrap'>
												<InputText
													label='Post Date'
													type='date'
													name='post_published_date'
												/>
											</div>
										</div>
										<div className='right'>
											{" "}
											<div className='input-wrap '>
												<InputTextArea
													className='h-[33.5rem] resize-none'
													label='Post Article'
													type='text'
													name='post_article'
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='form-action max-w-[400px] ml-au '>
									<button
										className='btn btn-form btn--accent w-1/4'
										type='submit'>
										{mutation.isPending ? <SpinnerButton /> : "Add"}
										{/* {<SpinnerButton />Add} */}
									</button>
									<button
										className='btn btn-form btn--cancel w-1/4'
										type='button'
										onClick={handleClose}>
										Cancel
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</motion.div>
			</ModalWrapper>
		</>
	);
};

export default ModalAddPost;
