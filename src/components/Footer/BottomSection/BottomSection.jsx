import "./BottomSection.css";

//* It returns a div with a paragraph and an unordered list.
//* @returns A div with a p and an unordered list.

const BottomSection = () => {
	return (
		<div className='footer__container'>
			<p>Copyright &copy; Copyright © Fight Club Store <span className='alicia' >  "Yo estudié con Alicia"</span></p>
			<ul className='footer__container_list'>
				<li>Shop</li>
				<li>About Us</li>
				<li>Contact</li>
				<li>Blog</li>
			</ul>
		</div>
	);
};

export default BottomSection;
