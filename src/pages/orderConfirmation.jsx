//image imports
import logo from "../assets/logo3.png";
import bag from "../assets/bag.svg";

import { useNavigate } from "react-router-dom";
import Process from "../components/checkoutProcess";
import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import ConfirmedCart from "../components/confirmedCartItem";

const Confirmation = () => {
  //states and hooks
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  //functionalities and click events
  const goToCart = () => {
    navigate("/cart");
  };
  const goToSupport = () => {};
  const trackOrder = () => {};
  const goToShopping = () => {
    navigate("/shop");
  };
  //utils
  //objects
  return (
    <div className="oder-confirmation mx-8">
      <div className="flex flex-row justify-between  items-center">
        <img src={logo} alt="logo" className="mb-4 w-fit h-fit" />
        <img
          src={bag}
          alt="logo"
          className="mb-4 w-fit h-fit"
          onClick={goToCart}
        />
      </div>
      <div className="flex flex-row mb-8">
        <div className="basis-3/5">
          <span className="">
            <Process
              color1={"bg-success-200"}
              color2={"bg-primary"}
              styleCol1={"#91CAFF"}
              styleCol2={"#003366"}
              isBar1={false}
              isBar2={false}
              isBar3={true}
            />
          </span>
          <div className="flex flex-col space-y-4 mt-6">
            <p className="font-open_sans text-font text-mobile-body md:text-tablet-body lg:text-body">
              Your order was successful
            </p>
            <h1 className="font-montserrat text-font text-mobile-headline md:text-tablet-headline lg:text-headlind">
              It's on the way!
            </h1>
            <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
              #123456789
            </p>
          </div>
          <div className="cart-items h-[65vh] overflow-y-auto mr-4">
            {cart.map((item) => {
              return (
                <ConfirmedCart
                  key={`${item.id}-${item.size}-${item.color}`}
                  id={item.id}
                  name={item.name}
                  color={item.color}
                  size={item.size}
                  image={item.image.large}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </div>
        </div>
        <div className="basis-2/5 bg-background p-4 shadow-2dp rounded-xl">
          <h2 className="font-montserrat text-font lg:text-title mb-2">
            #123456789
          </h2>
          <div>
            <h3 className="font-montserrat text-font text-mobile-body md:text-tablet-body lg:text-body my-4">
              Payment Options
            </h3>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Mode of Payment
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Mode of Payment
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Server name
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Server name
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Account name
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Account name
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Account number
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Account number
              </p>
            </span>
          </div>
          <hr />
          <div>
            <h3 className="font-montserrat text-font text-mobile-body md:text-tablet-body lg:text-body my-4">
              Billing Details
            </h3>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Full name
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Full name
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Address
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Address
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Phone
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Phone
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                City
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                City
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Apartment
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Apartment
              </p>
            </span>
          </div>
          <hr />
          <div>
            <h3 className="font-montserrat text-font text-mobile-body md:text-tablet-body lg:text-body my-4">
              Order Summary
            </h3>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Subtotal
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Subtotal
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Delivery
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Delivery
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Tax
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Tax
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Promo
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Promo
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-body md:text-tablet-body lg:text-body">
                Order Total
              </p>
              <p className="font-open_sans text-font text-mobile-body md:text-tablet-body lg:text-body">
                Order Total
              </p>
            </span>
          </div>
        </div>
      </div>
      <footer className="flex flex-row justify-between items-center mt-16 mb-4">
        <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
          You can contact our{" "}
          <span onClick={goToSupport} className="text-accent cursor-pointer">
            Customer Support
          </span>{" "}
          if you have any questions about your order
        </p>
        <p className="font-open_sans text-accent text-mobile-label md:text-tablet-label lg:text-label">
          <span onClick={trackOrder} className="cursor-pointer">
            Track order
          </span>{" "}
          <span onClick={goToShopping} className="text-primary cursor-pointer">
            or Continue shopping
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Confirmation;
