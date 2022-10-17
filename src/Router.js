import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./components/Login/Login";
import Error404 from "./pages/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDataContextProvider } from "./contexts/UserDataContext";

const Router = () => {
	return (
		<UserDataContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
				</Routes>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/success' element={<Home />} />
					<Route path='/cancel' element={<Home />} />
					<Route path='/productpage/:id' element={<ProductPage />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</UserDataContextProvider>
	);
};

export default Router;
