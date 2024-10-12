import { Link } from "react-router-dom";
import NavComp from "./navComp";
import { useState } from "react";
//imported assets
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import cart from "../assets/bag.svg";
import search from "../assets/search.svg";
import burger from "../assets/burger.svg";
import logo2 from "../assets/logo2.png";
import close from "../assets/cancel.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
  //manage local states
  const [isClicked, setIsCliked] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  //manage global state
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleClick = () => {
    setIsCliked(!isClicked);
  };
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="nav-bar mt-3">
      {/* mobile & tablet responsiveness */}
      <div className="lg:hidden flex flex-col mx-4">
        <div className="flex flex-row items-center justify-between ">
          <span className="flex w-6" onClick={handleExpand}>
            <img src={burger} />
          </span>
          {/* drawer component */}
          <div
            className={`fixed top-0 left-0 h-full bg-background  shadow-3dp z-40 transition-transform transform ${
              isExpanded ? "-translate-x-0" : "-translate-x-full"
            } w-4/5 max-w-xs`}
          >
            <div className="flex flex-row justify-between mx-4 items-center mt-2">
              <img src={logo2} />
              <span onClick={handleExpand}>
                <img src={close} />
              </span>
            </div>
            <div className="flex flex-col space-y-4 mt-4">
              <NavComp path={"/"} name={"Home"} expand={handleExpand} />
              <NavComp path={"/shop"} name={"Shop"} expand={handleExpand} />
              <NavComp path={"/about"} name={"About"} expand={handleExpand} />
              <NavComp
                path={"/contact"}
                name={"Contact"}
                expand={handleExpand}
              />
            </div>
          </div>
          {/* drawer component end*/}
          <Link to={"/"} className={`${isExpanded ? `hidden` : `flex`}`}>
            <img src={logo2} className="lg:hidden flex-1 flex " />
          </Link>
          <div className="flex flex-row items-center space-x-4">
            <Link to={"/account"}>
              <img src={user} className="w-4 h-4" />
            </Link>
            <Link to={"/cart"}>
              <img src={cart} className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <span className="flex flex-row items-center space-x-2 self-end my-2 md:w-[50vw] w-full justify-end px-4 py-1 border-2 rounded-lg">
          <input
            className="outline-none lg:placeholder:text-label lg:text-label md:placeholder:text-tablet-label md:text-tablet-label placeholder:text-mobile-label text-mobile-label w-full"
            placeholder="Search for something here..."
          />
          <img src={search} className="w-4 h-4" />
        </span>
      </div>
      {/* desktop responsiveness */}
      <div className="hidden lg:flex flex-row items-center justify-between mr-8 mt-3 flex-grow flex-shrink">
        <Link to={"/"}>
          <img src={logo} className="lg:flex flex-1 hidden" />
        </Link>
        <div className="flex-row space-x-2 hidden lg:flex">
          <NavComp path={"/"} name={"Home"} />
          <NavComp path={"/shop"} name={"Shop"} />
          <NavComp path={"/about"} name={"About"} />
          <NavComp path={"/contact"} name={"Contact"} />
        </div>
        <div className="flex flex-row space-x-4 items-center right-0 ">
          <span
            className={`flex flex-row items-center space-x-2 w-[25vw] justify-end ${
              isClicked ? `px-4 py-1 border-2 flex-grow rounded-lg` : ``
            }`}
          >
            {isClicked && (
              <input
                className="outline-none placeholder:text-body text-body  w-full"
                placeholder="Search for something here..."
              />
            )}
            <img
              src={search}
              className="w-4 h-4 cursor-pointer"
              onClick={handleClick}
            />
          </span>
          <Link
            to={isAuthenticated ? "/account" : "/login"}
            className="flex items-center space-x-2"
          >
            {isAuthenticated ? (
              <p className="text-primary text-label">Account</p>
            ) : (
              <p className="text-primary text-label">Login</p>
            )}
            <img src={user} className="w-4 h-4" />
          </Link>
          <Link to={"/cart"} className="flex items-center space-x-2">
            <p className="text-primary text-label">Cart</p>
            <img src={cart} className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
