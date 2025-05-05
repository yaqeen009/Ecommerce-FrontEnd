/* eslint-disable react/no-unescaped-entities */
//image imports
import logo from "../assets/logo3.png";
import bag from "../assets/bag.svg";

import { useNavigate } from "react-router-dom";
import Process from "../components/checkoutProcess";
import { useDispatch, useSelector } from "react-redux";
import ConfirmedCart from "../components/confirmedCartItem";
import { clearCart } from "../states/cartSlice";

const Confirmation = () => {
  //states and hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.orderDetails);
  //functionalities and click events
  const goToCart = () => {
    navigate("/cart");
    dispatch(clearCart());
  };
  const goToSupport = () => {};
  const trackOrder = () => {};
  const goToShopping = () => {
    navigate("/shop");
    dispatch(clearCart());
  };
  //utils
  //objects
  return (
    <div className="oder-confirmation mx-8 sm:mx-4">
      <div className="flex flex-row justify-between  items-center">
        <img src={logo} alt="logo" className="mb-4 w-fit h-fit" />
        <img
          src={bag}
          alt="logo"
          className="mb-4 w-fit h-fit"
          onClick={goToCart}
        />
      </div>
      <div className="flex flex-row sm:flex-col mb-8">
        <div className="flex flex-col basis-3/5">
        <span className="mb-4 sm:hidden md:scale-[0.8] md:relative md:-ml-8">
          <Process
            color1={"bg-success-200"}
            color2={"bg-primary"}
            styleCol1={"#91CAFF"}
            styleCol2={"#003366"}
            isBar1={false}
            isBar2={true}
            isBar3={false}
            bgcol={"#FEFEFE"}
          />
        </span>
          <span className="mb-4 sm:block hidden sm:scale-[0.7] self-center mr-8">
            <Process
              color1={"bg-success-200"}
              color2={"bg-success-400"}
              styleCol1={"#91CAFF"}
              styleCol2={"#627F9A"}
              isBar1={false}
              isBar2={true}
              isBar3={false}
              bgcol={"#FEFEFE"}
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
              #{order.id}
            </p>
          </div>
          <div className="cart-items h-[65vh] overflow-y-auto mr-4">
            {order.cartItems.map((item) => {
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
            #{order.id}
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
                {order.payment.momoprovider !== "" ? (
                  <>Mobile Money</>
                ) : (
                  <>Bank Transfer</>
                )}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Server name
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                {order.payment.momoprovider !== "" ? (
                  <>{order.payment.momoprovider}</>
                ) : (
                  <>{order.payment.bankname}</>
                )}
              </p>
            </span>
            {order.payment.momoprovider == "" && (
              <span className="flex flex-row justify-between items-center my-2">
                <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                  Account name
                </p>
                <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                  {order.payment.accountname}
                </p>
              </span>
            )}
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Account number
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                {order.payment.momoprovider !== "" ? (
                  <>{order.payment.momonum}</>
                ) : (
                  <>{order.payment.accountnum}</>
                )}
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
                {order.billing.firstname + " " + order.billing.lastname}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Address
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                {order.billing.address}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Phone
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                {order.billing.phone}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                City
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                {order.billing.city}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Apartment
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                {order.billing.apartment}
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
                ${order.total}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Delivery
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                ${(5.0).toFixed(2)}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Tax
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                ${(7.49).toFixed(2)}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                Promo
              </p>
              <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
                ${(10.0).toFixed(2)}
              </p>
            </span>
            <span className="flex flex-row justify-between items-center my-2">
              <p className="font-open_sans text-font text-mobile-body md:text-tablet-body lg:text-body">
                Order Total
              </p>
              <p className="font-open_sans text-font text-mobile-body md:text-tablet-body lg:text-body">
                ${Math.floor(order.total + 5.0 + 7.49 - 10.0).toFixed(2)}
              </p>
            </span>
          </div>
        </div>
      </div>
      <footer className="flex flex-row sm:flex-col sm:items-start sm:space-y-4 justify-between items-center mt-16 mb-4">
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