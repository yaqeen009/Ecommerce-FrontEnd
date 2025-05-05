/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import NavComp from "./navComp";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetchData from "../hooks/useFetch";
import { addToCart } from "../states/cartSlice";
import Card from "./card";
//imported assets
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import cartEmpty from "../assets/bag.svg";
import cartFilled from "../assets/bagFilled.svg";
import search from "../assets/search.svg";
import burger from "../assets/burger.svg";
import logo2 from "../assets/logo2.png";

import CancelBtn from "../assets/cancel";
import ButtonComp from "./button";

const NavBar = () => {
  //manage local states
  const [isClicked, setIsCliked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [sizeState, setSizeState] = useState(null);
  const [colorState, setColorState] = useState(null);
  const [isClickedDesktop, setIsClikedDesktop] = useState(false);

  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //manage global state
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.cart);

  //click functionalities
  const handleProdClick = (productId) => {
    navigate(`/product/${productId + 1}`);
  };
  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      color: colorState,
      size: sizeState,
    };
    dispatch(addToCart(productToAdd));
  };
  const handleClick = () => {
    setIsCliked(!isClicked);
  };
  const handleClickDesktop = () => {
    setIsClikedDesktop(!isClickedDesktop);
  };
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  //data fetching
  const url = "/data.json";
  const { data, loading, error } = useFetchData(url);
  const newArrivals = data?.products?.newArrivals || []; //for new arrivals data

  // set default color and size
  useEffect(() => {
    if (newArrivals.length > 0) {
      if (newArrivals[0]?.colors?.length > 0) {
        setColorState(newArrivals[0].colors[0]);
      }
      if (newArrivals[0]?.sizes?.length > 0) {
        setSizeState(newArrivals[0].sizes[0]);
      }
    }
  }, [newArrivals]);

  return (
    <div className="nav-bar mt-3 relative z-10">
      {/* mobile & tablet responsiveness */}
      <div className="lg:hidden flex flex-col mx-4">
        <div className="flex flex-row items-center justify-between ">
          <span className="flex w-6" onClick={handleExpand}>
            <img src={burger} />
          </span>
          {/* drawer component */}
          <div
            className={`fixed inset-0 bg-font bg-opacity-75 transition-opacity ${
              !isExpanded && `hidden`
            }`}
            onClick={handleExpand}
          ></div>
          <div
            className={`fixed top-0 left-0 h-full bg-background  shadow-3dp z-40 transition-transform transform ${
              isExpanded ? "-translate-x-0" : "-translate-x-full"
            } w-4/5 max-w-xs`}
          >
            <div className="flex flex-row justify-between mx-4 items-center mt-2">
              <img src={logo2} />
              <span onClick={handleExpand}>
                <CancelBtn color={"#333333"} />
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
            <img src={search} className="w-4 h-4" onClick={handleClick} />
            <Link to={isAuthenticated ? "/account" : "/login"}>
              <img src={user} className="w-4 h-4" />
            </Link>
            <Link to={"/cart"}>
              {cart.length > 0 ? (
                <img src={cartFilled} className="w-4 h-4" />
              ) : (
                <img src={cartEmpty} className="w-4 h-4" />
              )}
            </Link>
          </div>
        </div>
        {/* Search component expanded */}
        {isClicked ? (
          <div>
            <div
              className={`fixed inset-0 bg-font bg-opacity-75 transition-opacity ${
                !isClicked && `hidden`
              }`}
              onClick={handleClick}
            ></div>
            <div
              className={`fixed top-0 right-0 h-full bg-primary flex flex-col space-y-4 shadow-3dp z-40 transition-transform transform ${
                isClicked ? "-translate-x-0" : "-translate-x-full"
              } w-4/5 max-w-xs`}
            >
              <div className="flex flex-row justify-between mx-4 items-center mt-2">
                <span onClick={handleClick}>
                  <CancelBtn color={"#FF1F00"} />
                </span>
                <ButtonComp
                btnName={"Show all"}
                btnTextColor={"text-accent hover:text-background"}
              />
              </div>
              <span className="w-[90%] mx-4 px-4 pb-2 pt-3  bg-background h-fit border rounded-xl">
              <input
                type="text"
                className="border rounded-lg border-none outline-none placeholder:text-mobile-body"
                placeholder='Search for something here like "Gloves"'
              />
            </span>
              <div className="h-full space-y-4 overflow-y-auto">
                {newArrivals.map((item, index) => {
                  return (
                    <div className="mx-4 ">
                      <Card
                        key={index}
                        loading={loading}
                        error={error}
                        data={data}
                        image={item.image.large}
                        name={item.name}
                        price={item.price}
                        imgClick={() => handleProdClick(index)}
                        handleAddToCart={() => handleAddToCart(item)}
                        height={"h-48"}
                        txtcol={"text-background"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-fit absolute top-0 z-0 transition-all duration-200"></div>
        )}
      </div>
      {/* desktop responsiveness */}
      <div className="bg-background w-full hidden relative z-10 lg:flex flex-row items-center justify-between shadow-md pr-8 py-2 flex-grow flex-shrink">
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
          <img
            src={search}
            className="w-4 h-4 cursor-pointer hover:scale-125 transition"
            onClick={handleClickDesktop}
          />
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
            {cart.length > 0 ? (
              <img src={cartFilled} className="w-4 h-4" />
            ) : (
              <img src={cartEmpty} className="w-4 h-4" />
            )}
          </Link>
        </div>
      </div>
      {/* Search component expanded */}
      {isClickedDesktop ? (
        <div className="w-full h-fit px-8 pt-4 pb-2 bg-primary flex flex-col absolute top-16 z-0 transition-all duration-200">
          <span className="w-full flex flex-row items-baseline">
            <span className="w-1/2 left-0">
              <ButtonComp
                btnName={"Show all"}
                btnTextColor={"text-accent hover:text-background"}
              />
            </span>
            <span className="w-1/2 px-4 pb-2 pt-3  bg-background h-fit border rounded-xl">
              <input
                type="text"
                className="w-full border rounded-lg border-none outline-none"
                placeholder='Search for something here like "Gloves"'
              />
            </span>
          </span>
          <div className="h-fit mt-2 flex space-x-3 overflow-scroll-x">
            {newArrivals.map((item, index) => {
              return (
                <div className="w-1/4 ">
                  <Card
                    key={index}
                    loading={loading}
                    error={error}
                    data={data}
                    image={item.image.large}
                    name={item.name}
                    price={item.price}
                    imgClick={() => handleProdClick(index)}
                    handleAddToCart={() => handleAddToCart(item)}
                    height={"h-60"}
                    txtcol={"text-background"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full h-fit absolute top-0 z-0 transition-all duration-200"></div>
      )}
    </div>
  );
};

export default NavBar;
