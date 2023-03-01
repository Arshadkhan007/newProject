import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="header_Top">
          <div className="header_left_nav">
            <MenuIcon />
          </div>

          {/* Logo */}
          <Link to="/">
            <img
              className="logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>

          {/* Search Box */}
          <div className="headerSearch">
            <input type="search" className="headerSearch_input" />
            <SearchIcon className="headerSearchIcon" />
          </div>

          {/* Links */}
          <div className="headerNavbar">
            {/* Signout/Signin */}
            <Link to="/Login" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Hello</span>
                <span className="headerOption_two">User</span>
              </div>
            </Link>
            {/* Return Order */}
            <Link to="/Orders" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Return</span>
                <span className="headerOption_two">Order</span>
              </div>
            </Link>
            {/* Prime */}
            <Link to="/" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Try</span>
                <span className="headerOption_two">Prime</span>
              </div>
            </Link>
            {/* Profile*/}
            <Link to="/Profile" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Your</span>
                <span className="headerOption_two">Profile</span>
              </div>
            </Link>

            {/* Basket */}
            <Link to="/Cart" className="headerLink">
              <div className="headerOption_Basket">
                <ShoppingBasketIcon />
                {/* For The Count in basket */}
                <span className="headerOption_two basketCount">4</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="headerBottom">
          {/* Address */}
          <div className="headerAddress">
            <div className="headerAddress_icon">
              <LocationOnIcon />
            </div>
            <div className="headerOptions">
              <span className="headerOption_one">Deliver To </span>
              <span className="headerOption_two">Easy Coding</span>
            </div>
          </div>

          {/* Header Bottom Nav */}
          <div className="headerBottom_Navbar">
            <span>
              <Link to="/ListProducts" className="headerLink">
                All Products
              </Link>
            </span>
            <span>Books</span>
            <span>New Release</span>
            <span>Gift Ideas</span>
            <span>Easy Coding</span>
            <span>Amazon Pay</span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
