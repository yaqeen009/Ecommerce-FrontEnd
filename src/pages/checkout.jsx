//image imports
import logo from "../assets/logo3.png";

import { useDispatch, useSelector } from "react-redux";
import Process from "../components/checkoutProcess";
import Payment from "../components/checkoutPayment";
import Billing from "../components/checkoutBilling";
import Shipping from "../components/checkoutShipping";
import ButtonComp from "../components/button";
import { useState } from "react";

const Checkout = () => {
  //states and hooks
  const [isChecked, setIsChecked] = useState(true)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  //functionalities
  const submitForm = (data) => {
    console.log(data);
  };

  const handleCheck = () => {
    setIsChecked((prev) => !prev)
  }
  //function for displaying cart items
  //objects
  //utils
  return (
    <div className="checkout">
      <div className="flex flex-row ">
        <div className="flex flex-col ml-4 mt-4 basis-3/5 w-full">
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
            <Billing  isChecked={isChecked} handleCheck={handleCheck} />
          </section>

          <section className="shipping-details mr-4">
            <Shipping  isDisabled={isChecked}/>
          </section>
          <span className="mt-8 mb-4 w-full pr-4">
            <ButtonComp btnWidth={"w-full mr-4"} btnName={"Pay now"} btnColor={"bg-accent hover:bg-primary"} btnTextColor={"text-background "} btnTextSize={"mx-[45%]"} />
          </span>
        </div>
        <div className="flex flex-col basis-2/5 bg-primary"></div>
      </div>
    </div>
  );
};

export default Checkout;
