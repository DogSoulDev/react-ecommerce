import { FaReply } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import "./Services.css";

//* It returns a div with four child divs, each of which contains a span, an h3, and a p.
//* @returns A div with a className of features__container.

const Services = () => {
	return (
		<div className='features__container'>
			<div className='firstFeature__container'>
				<span className='services_icons'>
					<FaReply size='5rem' />
				</span>
				<div> 
					<h3 className='services_names'>FREE RETURNS</h3>
					<h3 className='services_names'>Easy & Free</h3>
					<p className='services_description' >From all Orders Over $100</p>
				</div>
				
				<p>

				</p>
			</div>

			<div className='secondFeature__container'>
				<span className='services_icons'>
					<FaCreditCard size='5rem' />
				</span>
				<div> 
					<h3 className='services_names'>SECURE PAYMENT</h3>
					<h3 className='services_names'>Fast & Safe</h3>
					<p className='services_description' >From all Orders Over $100</p>
				</div>
				<p>

				</p>
			</div>

			<div className='thirdFeature__container'>
				<span className='services_icons'>
					<FaShippingFast size='5rem' />
				</span>
				<div> 
					<h3 className='services_names'>FREE SHIPPING</h3>
					<h3 className='services_names'>Safe & Fast</h3>
					<p className='services_description' >From all Orders Over $100</p>
				</div>
				<p>

				</p>
			</div>


		</div>
	);
};

export default Services;
