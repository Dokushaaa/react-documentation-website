import React from "react";
import { motion } from "framer-motion";

const ModalWrapper = ({ children, position }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-screen flex items-center z-30 ${
				position === "center" ? "justify-center" : "justify-end"
			}`}>
			<motion.div
				className='backdrop absolute top-0 left-0 w-full h-full bg-content/90 -z-10'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}></motion.div>
			{children}
		</div>
	);
};

export default ModalWrapper;
