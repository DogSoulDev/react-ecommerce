import CartItem from "../CartItem/CartItem";
import { UserDataContext } from "../../../contexts/UserDataContext";
import { useState, useEffect, useContext } from "react";
import { Button, Loading } from "@nextui-org/react";
import "./ShoppingCart.css";

const ShoppingCart = ({ shoppingCart, setShoppingCart, notifyToast }) => {
	const { userCache } = useContext(UserDataContext);
	const [totalItemPrice, setTotalItemPrice] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let sumTotalItemPrice = 0;
		shoppingCart.forEach((item) => {
			sumTotalItemPrice += item.itemPrice * item.itemQuantity;
		});
		setTotalItemPrice(sumTotalItemPrice);
	}, [shoppingCart]);

	const handleCheckout = () => {
		if (userCache.username === undefined) {
			notifyToast("You need to Login!", true);
			return;
		}
		setIsLoading(true);
		fetch("http://localhost:4242/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ shoppingCart }),
		})
			.then((res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ url }) => {
				setIsLoading(false);
				window.location = url;
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<div className='main__cart'>
			<h3>Shopping Cart</h3>
			<ul className='cart__list'>
				{shoppingCart.length > 0 ? (
					shoppingCart.map(
						({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
							return (
								<CartItem
									key={itemId}
									itemId={itemId}
									itemTitle={itemTitle}
									itemPrice={itemPrice}
									itemImage={itemImage}
									itemQuantity={itemQuantity}
									shoppingCart={shoppingCart}
									setShoppingCart={setShoppingCart}
								/>
							);
						},
					)
				) : (
					<h1>Empty Cart</h1>
				)}
			</ul>
			<div className='cart__bottom'>
				<p className='cart__total'>Total:</p>
				<p className='cart__total_price'>€{totalItemPrice}</p>
			</div>
			<Button
				bordered
				color='warning'
				auto
				onClick={handleCheckout}
				disabled={isLoading || shoppingCart.length === 0}
			>
				{isLoading ? <Loading type='points' color='warning' /> : "Checkout"}
			</Button>
		</div>
	);
};

export default ShoppingCart;
