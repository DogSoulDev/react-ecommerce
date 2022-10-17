import "./ShippingBanner.css";
import { FaShoppingBag } from "react-icons/fa";
import { IconContext } from "react-icons";

//* It returns a div with two spans inside. The first span contains a FontAwesome icon, the second span
//* contains a string.
//* @returns A div with two spans inside.

const ShippingBanner = () => {
  return (
    <div className="freeShipping__container">
      <IconContext.Provider value={{ size: "4.5rem", color: "white" }}>
        <span>
          {" "}
          <FaShoppingBag size="6rem" color="#b2b1b1" />{" "}
        </span>
      </IconContext.Provider>
      <span>FREE SHIPPING ON ANY ORDER ABOVE 50€</span>
    </div>
  );
};

export default ShippingBanner;
