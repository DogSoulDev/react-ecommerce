import ImageGallery from "react-image-gallery";
import "./ImageCarousel.css";

function ImageCarousel() {
	const images = [
		{
			original: "https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/Jason-statham-Banner-1.jpg",
		},
		{
			original: "https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/Jason-statham-Banner2.jpg",
		},
		{
			original:
				"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/Jason-statham-Banner-1.jpg",
		},
	];

	return (
		<div className='carousel_container'>
			<ImageGallery
				items={images}
				autoPlay={true}
				showBullets={true}
				showPlayButton={true}
				slideDuration={2000}
				slideInterval={8000}
			/>
		</div>
	);
}

export default ImageCarousel;
