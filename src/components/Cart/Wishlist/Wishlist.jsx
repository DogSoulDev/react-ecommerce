import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import "./Wishlist.css";

const Wishlist = ({
	shoppingCart,
	setShoppingCart,
	dispatch,
	wishlistCart,
	notifyToast
}) => {
	const [totalItemWishlist, setTotalItemWishlist] = useState(0);

	useEffect(() => {
		let totalOfWhislistArrayItems = wishlistCart.length;
		setTotalItemWishlist(totalOfWhislistArrayItems);
	}, [wishlistCart]);

	return (
		<div className='main__cart'>
			<h3>Whislist Cart</h3>
			<ul className='cart__list'>
				{wishlistCart.length > 0 ? (
					wishlistCart.map(
						({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
							return (
								<CartItem
									key={itemId}
									itemId={itemId}
									itemTitle={itemTitle}
									itemPrice={itemPrice}
									itemImage={itemImage}
									itemQuantity={itemQuantity}
									wishlistCart={wishlistCart}
									dispatch={dispatch}
									shoppingCart={shoppingCart}
									setShoppingCart={setShoppingCart}
									notifyToast={notifyToast}
									wish={true}
								/>
							);
						},
					)
				) : (
					<h1>No Love!</h1>
				)}
			</ul>
			<div className='cart__bottom'>
			</div>
		</div>
	);
};
export default Wishlist;
