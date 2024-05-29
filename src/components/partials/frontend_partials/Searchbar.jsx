import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ setIsSeach, setKeyword }) => {
	const handleChange = async (e) => {
		if (e.target.value === "") {
			setIsSeach(false);
		} else {
			setIsSeach(true);
		}
		setKeyword(e.target.value);
	};

	return (
		<form
			action=''
			className='relative'>
			<input
				type='text'
				placeholder='Search Student'
				className='p-1 px-3 pl-10 outline-none bg-secondary border-stone-400 rounded-md placeholder:text-content placeholder:opacity-50'
				onChange={(e) => handleChange(e)}
			/>

			<CiSearch className='absolute top-1 right-2 z-20 text-content text-2xl opacity-50 text-2xl' />
		</form>
	);
};

export default Searchbar;
