import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProductPage.css";
import Navbar from "../../components/Navbar/Navbar";	

const ProductPage = () => {
	const [productPage, setProductPage] = useState({});
	const url = "http://localhost:3001/products";
	const { id: productId } = useParams();

	useEffect(() => {
		try {
			const fetchProducts = async () => {
				const response = await fetch(url);
				const data = await response.json();
				const results = data.filter((item) => item.id === Number(productId));
				setProductPage(...results);
			};
			fetchProducts();
		} catch (error) {
			console.log(error);
		}
	}, [productId]);

	return (
		<>
			<Navbar />
		<div className="product-page">
			<figure>
				<img src={productPage.image} alt='' />
				<div className="product-page-description">
					<figcaption className="product-tittle">{productPage.title}</figcaption>
					<figcaption className="product-description-page">{productPage.description}</figcaption>
					<figcaption>{productPage.category}</figcaption>
				</div>
			</figure>
			</div>
			<Link to={"/"}>
				<button className="btn-back">Go Back!</button>
			</Link>
		</>
	);
};

export default ProductPage;