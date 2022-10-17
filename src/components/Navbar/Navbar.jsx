import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import Wishlist from "../Cart/Wishlist/Wishlist";
import Login from "../../components/Login/Login";
import useRegisterAuth from "../../hooks/useRegisterAuth";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";
import { Popover, User, Button, Tooltip, Grid } from "@nextui-org/react";
import { FaUserNinja} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsBagCheck, BsHeart,BsSearch } from "react-icons/bs";
import "./Navbar.css";

const Navbar = ({
  shoppingCart,
  setShoppingCart,
  notifyToast,
  dispatch,
  wishlistCart,
}) => {
  const { userCache, setUserCache } = useContext(UserDataContext);
  const { signInWithGoogle } = useRegisterAuth();

  return (
    <>
      <div className="top-bar">
        <div>
          <p className="coupon"> GET 20% SALE WITH COUPONE CODE <span className="coupon-text">GBNJKI25</span></p>
        </div>
        <div className="social_network__container">
          <IconContext.Provider value={{ size: "4.2rem", color: "white" }}>
            <span>
              <AiOutlineInstagram />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "4.2rem", color: "white" }}>
            <span>
              <AiOutlineGithub />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "4.2rem", color: "white" }}>
            <span>
              <AiOutlineTwitter />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "4.2rem", color: "white" }}>
            <span>
              <AiOutlineLinkedin />
            </span>
          </IconContext.Provider>
        </div>
      </div>
      <div className="navbar__container">
        <div className="navbar__container_logo">
          <img
            alt="logo"
            src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/LogoJason_pink.png"
          ></img>
        </div>
        <div className="navbar__container_links">
          <span className="navbar__container_link">HOME</span>
          <span className="navbar__container_link">SHOP</span>
          <span className="navbar__container_link">PRODUCTS</span>
          <span className="navbar__container_link">CONTACT</span>
        </div>

        <div className="navbar__container_icons">
          <Popover>
            <Popover.Trigger>
              {userCache?.username ? (
                <User
                  as="button"
                  src={userCache?.avatar}
                  name={userCache?.name ? userCache?.name : userCache.username}
                  description={userCache?.name ? userCache.username : ""}
                />
              ) : (
                
                <Button auto color="warning" light>
                  <IconContext.Provider
                  value={{ size: "4.5rem", color: "black" }}
                >
                  <span>
                    <FaUserNinja />
                  </span>
                </IconContext.Provider>
                </Button>
              )}
            </Popover.Trigger>
            <Popover.Content css={{ px: "$4", py: "$2" }}>
              <div>
                {!userCache?.username && (
                   <Button flat color="primary" 
                    className="login-with-google-btn"
                    onClick={signInWithGoogle}
                  >
                    Sign in with Google
                  </Button>
                )}
              </div>

              <Login userCache={userCache} setUserCache={setUserCache} />
            </Popover.Content>
          </Popover>
          <Tooltip content="Comming Soon" color="invert" placement="bottom">
            <Button auto color="invert">
              <IconContext.Provider value={{ size: "4.5rem", color: "black" }}>
                <span>
                  <BsSearch />
                </span>
              </IconContext.Provider>
            </Button>
          </Tooltip>
          <Popover>
            <Popover.Trigger>
              <Button auto color="error" light>
                <IconContext.Provider
                  value={{ size: "4.5rem", color: "black" }}
                >
                  <span>
                    <BsHeart />
                  </span>
                </IconContext.Provider>
              </Button>
            </Popover.Trigger>
            <Popover.Content css={{ width: "max-content" }}>
              <Wishlist
                dispatch={dispatch}
                wishlistCart={wishlistCart}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                notifyToast={notifyToast}
              />
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger>
              <Button auto color="error" light>
                <IconContext.Provider
                  value={{ size: "4.5rem", color: "black" }}
                >
                  <span>
                    <BsBagCheck />
                  </span>
                </IconContext.Provider>
              </Button>
            </Popover.Trigger>
            <Popover.Content css={{ width: "max-content" }}>
              <ShoppingCart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                userCache={userCache}
                notifyToast={notifyToast}
              />
            </Popover.Content>
          </Popover>

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
