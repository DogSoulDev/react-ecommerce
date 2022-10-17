import Navbar from "../../components/Navbar/Navbar";
import ImageCarousel from "../../components/Store/ImageGallery/ImageCarousel";
import ShippingBanner from "../../components/Footer/ShippingBanner/ShippingBanner";
import SelectFighter from "../../components/SelectFighter/SelectFighter";
import Catalog from "../../components/Store/Catalog/Catalog";
import PresentationVideo from "../../components/PresentationVideo/PresentationVideo"
import Services from "../../components/Footer/Services/Services";
import BottomSection from "../../components/Footer/BottomSection/BottomSection";
import Sponsors from "../../components/Sponsors/Sponsors";
import Ranking from "../../components/Ranking/Ranking";
import { wishlistReducer } from "../../reducers/wishlistReducer";
import { UserDataContext } from "../../contexts/UserDataContext";
import { useEffect, useState, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Home.css";

const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
const wishlistStorage = JSON.parse(localStorage.getItem("saveWishCache")) || [];

const notifyToast = (message, error = false) => {
	if (error) return toast.error(message);
	toast.success(message);
};

const Home = () => {
	const [shoppingCart, setShoppingCart] = useState(initialStorage);
	const [wishlistCart, dispatch] = useReducer(wishlistReducer, wishlistStorage);
	const { userCache } = useContext(UserDataContext);
	const paymentRedirection = useLocation();
	const navigator = useNavigate();

	useEffect(() => {
		localStorage.setItem("saveCache", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	useEffect(() => {
		localStorage.setItem("saveWishCache", JSON.stringify(wishlistCart));
	}, [wishlistCart]);

	useEffect(() => {
		if (paymentRedirection.pathname === "/cancel") {
			navigator("/");
			notifyToast("Process Cancelled!");
		} else if (paymentRedirection.pathname === "/success") {
			navigator("/");
			notifyToast(
				`${userCache.username} congratulations you payment process is done!`,
			);
			setShoppingCart([]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='main__app'>
			<Navbar
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				notifyToast={notifyToast}
				dispatch={dispatch}
				wishlistCart={wishlistCart}
			/>
			<ImageCarousel />
			<Services />
			<SelectFighter />
			<Catalog
				shoppingCart={shoppingCart}
				setShoppingCart={setShoppingCart}
				dispatch={dispatch}
				wishlistCart={wishlistCart}
				notifyToast={notifyToast}
			/>
			<PresentationVideo />
			<Sponsors />
			<ShippingBanner />
			<Ranking />
			<BottomSection />
			<Toaster position='top-left' reverseOrder={false} />
		</div>
	);
};

export default Home;
