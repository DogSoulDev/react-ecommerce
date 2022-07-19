//* This component connects the db.json with our application, we also can connect it with external API.
//? We import db.json to renderize the proprieties of our Product with {products.map(({ id, title, price, image })
//? Also import Product component to know wich proprieties they have.

import { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Catalog.css";

const Catalog = ({ shoppingCart, setShoppingCart }) => {
	const [products, setSaveProducts] = useState([]);

	const url = "http://localhost:3001/products";

	useEffect(() => {
		try {
			const fetchProducts = async () => {
				const response = await fetch(url);
				const data = await response.json();
				setSaveProducts(data);
			};
			fetchProducts();
		} catch (error) {
			console.log(error);
		}
	}, [url]);

	return (
		<div className='catalog__container'>
			{products.map(({ id, title, price, image }) => {
				return (
					<Product
						key={id}
						id={id}
						title={title}
						price={price}
						image={image}
						shoppingCart={shoppingCart}
						setShoppingCart={setShoppingCart}
					/>
				);
			})}
		</div>
	);
};

export default Catalog;