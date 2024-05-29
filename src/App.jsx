import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// page access:
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute";

import PageNotFound from "./components/partials/PageNotFound";
import { StoreProvider } from "./store/StoreContext";
// backend

import PostHome from "./components/pages/developer/dashboard/Backend/post/PostHome";
import Tag from "./components/pages/developer/dashboard/Backend/tag/Tag";
import UsersHome from "./components/pages/developer/dashboard/Backend/users/UsersHome";
import CreatePassword from "./components/pages/developer/access/CreatePassword";
import ForgotPassword from "./components/pages/developer/access/ForgotPassword";
import Login from "./components/pages/developer/access/Login";
import DashboardHome from "./components/pages/developer/dashboard/Backend/DashboardHome";
import Home from "./components/pages/developer/ui/FrontEnd/home/Home";
import Single from "./components/pages/developer/ui/FrontEnd/single/Single";
import Category from "./components/pages/developer/dashboard/Backend/category/Category";
// frontend:

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<StoreProvider>
					<Router>
						<Routes>
							{/* main website requires no link or blank url*/}
							<Route
								path=''
								element={<Home />}
							/>
							<Route
								path='/home'
								element={<Home />}
							/>
							<Route
								path='/single'
								element={<Single />}
							/>
							{/* if url is undef */}
							<Route
								path='/*'
								element={<PageNotFound />}
							/>
							{/* if url is undef */}
							<Route
								path='/post'
								element={
									<ProtectedRoute>
										<PostHome />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/category'
								element={
									<ProtectedRoute>
										<Category />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/tag'
								element={
									<ProtectedRoute>
										<Tag />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/users'
								element={
									<ProtectedRoute>
										<UsersHome />
									</ProtectedRoute>
								}
							/>

							{/* route to create password */}
							<Route
								path='/create-password'
								element={<CreatePassword />}
							/>
							{/* route to reset password */}
							<Route
								path='/Forgot-password'
								element={<ForgotPassword />}
							/>
							<Route
								path='/login'
								element={<Login />}
							/>

							{/* secured path to db management */}
							<Route
								path='/dashboard'
								element={
									<ProtectedRoute>
										<DashboardHome />
									</ProtectedRoute>
								}
							/>
						</Routes>
					</Router>
				</StoreProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
