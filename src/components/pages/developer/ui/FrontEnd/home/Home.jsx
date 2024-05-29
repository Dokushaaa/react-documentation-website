import React from "react";
import UiHeader from "../../../../../partials/frontend_partials/UiHeader";
import UiFooter from "../../../../../partials/frontend_partials/UiFooter";
import HomeContent from "./HomeContent";
import ScrollToTop from "../../../../../partials/frontend_partials/ScrollToTop";

const Home = () => {
	return (
		<>
			<UiHeader />
			<HomeContent />
			<UiFooter />
			<ScrollToTop />
		</>
	);
};

export default Home;
