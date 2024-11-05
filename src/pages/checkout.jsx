//image imports
import logo from "../assets/logo3.png";
import bag from "../assets/bag_white.svg";

import { useDispatch, useSelector } from "react-redux";
import Process from "../components/checkoutProcess";
import Payment from "../components/checkoutPayment";
import Billing from "../components/checkoutBilling";
import Shipping from "../components/checkoutShipping";
import ButtonComp from "../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/cartItem";

const Checkout = () => {
  //states and hooks
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  //functionalities
  const submitForm = (data) => {
    console.log(data);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  //function for displaying cart items
  //objects
  //utils
  return (
    <div className="checkout flex flex-row h-screen">
      <div className="flex flex-col pl-4 mt-4 basis-3/5 w-3/5 h-full fixed overflow-y-auto bg-background pb-4">
        <span className="w-fit h-fit">
          <img src={logo} alt="logo" className="mb-4 w-fit h-fit" />
        </span>
        <span className="mb-4">
          <Process
            color1={"bg-success-200"}
            color2={"bg-primary"}
            styleCol1={"#91CAFF"}
            styleCol2={"#003366"}
          />
        </span>
        <section className="payment mr-4">
          <Payment submitForm={submitForm} />
        </section>

        <section className="billing-details mr-4">
          <Billing isChecked={isChecked} handleCheck={handleCheck} />
        </section>

        <section className="shipping-details mr-4">
          <Shipping isDisabled={isChecked} />
        </section>

        <span className="mt-16 mb-4 w-full pr-4">
          <ButtonComp
            btnWidth={"w-full mr-4"}
            btnName={"Pay now"}
            btnColor={"bg-accent hover:bg-primary"}
            btnTextColor={"text-background "}
            btnTextSize={"mx-[45%] py-2"}
          />
        </span>
      </div>
      <div className="flex flex-col basis-2/5 bg-primary ml-auto h-full overflow-y-auto">
        <span
          onClick={goToCart}
          className="flex self-end mr-4 mt-4 cursor-pointer"
        >
          <img src={bag} alt="" />
        </span>
        <div className="from-cart m-8">
          <p className="font-open_sans text-background text-mobile-label md:text-tablet-label lg:text-label">
            Ammount Due
          </p>
          <h1 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind text-background">
            ${totalPrice}
          </h1>
          <div className="flex flex-col">
            {cart.length > 0 &&
              cart.map((item) => {
                return (
                  <div className="grid grid-cols-1 gap-y-2">
                    <CartItem
                      key={`${item.id}-${item.size}-${item.color}`}
                      id={item.id}
                      name={item.name}
                      color={item.color}
                      size={item.size}
                      image={item.image.large}
                      price={item.price}
                      inStock={"In Stock"}
                      amount={item.amount}
                      isCheckOut={true}
                    />
                  </div>
                );
              })}
          </div>
          <hr />
          <div className="flex flex-col m-4 space-y-4">
            <span className="flex flex-row justify-between">
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                Subtotal
              </p>
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                {totalPrice.toFixed(2)}
              </p>
            </span>
            <span className="flex flex-row justify-between">
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                Delivery
              </p>
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                {5.00.toFixed(2)}
              </p>
            </span>
            <span className="flex flex-row justify-between">
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                Tax
              </p>
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                {7.49.toFixed(2)}
              </p>
            </span>
            <span className="flex flex-row justify-between">
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                Promo
              </p>
              <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-background">
                {10.00.toFixed(2)}
              </p>
            </span>
          </div>
          <hr />
          <span className="flex flex-row justify-between m-4">
            <p className="text-mobile-title md:text-tablet-title lg:text-title font-montserrat text-background">
              Order Total
            </p>
            <p className="text-mobile-title md:text-tablet-title lg:text-title font-montserrat text-background">
            {(totalPrice + 5.0 + 7.49 - 10.0).toFixed(2)}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
