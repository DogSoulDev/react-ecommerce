import { Button } from "@nextui-org/react";
import "./CartItem.css";

//* A function that takes in the following parameters:
const CartItem = ({
	itemId,
	itemTitle,
	itemPrice,
	itemImage,
	shoppingCart,
	setShoppingCart,
	itemQuantity,
	wish,
	wishlistCart,
	setWishlistCart,
}) => {

	const restQuantityItem = () => {
		if (itemQuantity === 1) return;
		shoppingCart.forEach((item) => {
			if (item.itemId === itemId) {
				item.itemQuantity -= 1;
			}
		});
		setShoppingCart([...shoppingCart]);
	};

	const addQuantityItem = () => {
		shoppingCart.forEach((item) => {
			if (item.itemId === itemId) {
				item.itemQuantity += 1;
			}
		});
		setShoppingCart([...shoppingCart]);
	};

	const itemRemove = () => {
		if (wish) {
			const newWishList = wishlistCart.filter(
				(wishItem) => wishItem.itemId !== itemId,
			);
			setWishlistCart(newWishList);
		} else {
			const newCart = shoppingCart.filter((item) => item.itemId !== itemId);
			setShoppingCart(newCart);
		}
	};

	const checkShoppingCart = () => {
		let noItemInShoppingCart = false;
		shoppingCart.forEach((item) => {
			if (item.itemId === itemId) {
				noItemInShoppingCart = true;
			}
		});
		console.log(noItemInShoppingCart);
		return noItemInShoppingCart;
	};

	const addToShoppingCart = () => {
		if (checkShoppingCart()) return;
		setShoppingCart([
			...shoppingCart,
			{
				itemId: itemId,
				itemTitle: itemTitle,
				itemPrice: itemPrice,
				itemImage: itemImage,
				itemQuantity: 1,
			},
		]);
		itemRemove();
	};

	return (
		<div className='cart__item'>
			<img className='cart__item_image' src={itemImage} alt='product' />
			<div>
				<p className='cart__item_title'>{itemTitle}</p>
				<p className='cart__item_price'>€ {itemPrice}</p>
				<div className='cart__item_bottom'>
					{wish ? (
						<Button light color='error' auto onClick={addToShoppingCart}>
							Add to Cart
						</Button>
					) : (
						<>
							<Button light color='error' auto onClick={restQuantityItem}>
								-
							</Button>
							<p>{itemQuantity}</p>
							<Button light color='error' auto onClick={addQuantityItem}>
								+
							</Button>
						</>
					)}
					<Button light color='error' auto onClick={itemRemove}>
						Remove
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
