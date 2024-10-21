import { useSelector } from "react-redux";
import ButtonComp from "../components/button";
import CartItem from "../components/cartItem";
import CartSummary from "../components/cartSummary";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { totalPrice } = useSelector((state) => state.cart);
  
  return (
    <div className="cart lg:mx-8 mx-4 lg:my-16 my-8 bg-background">
      <h1 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
        Shopping Cart
      </h1>
      <div className="flex flex-row sm:flex-col w-full space-x-8 sm:space-x-0">
        <div className="w-2/3 md:w-1/2 sm:w-full">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <CartItem
                  key={`${item.id}-${item.size}-${item.color}`}
                  id = {item.id}
                  name={item.name}
                  color={item.color}
                  size={item.size}
                  image={item.image.large}
                  price={item.price}
                  inStock={"In Stock"}
                  amount={item.amount}
                />
              );
            })
          ) : (
            <p>Cart is Empty</p>
          )}
        </div>
        <div className="flex flex-col w-1/3 md:w-1/2 sm:w-full space-y-4">
          <CartSummary
            subtotal={totalPrice}
            delivery={5.0}
            tax={7.49}
            promo={10.0}
            orderTotal={Math.floor(totalPrice + 5.0 + 7.49 - 10.0)}
          />
          <ButtonComp
            btnName={"Proceed to Checkout"}
            btnColor={"bg-accent w-full justify-center"}
            btnHover={"hover:bg-primary"}
            btnTextColor={"text-background"}
            btnTextSize={"py-2"}
          />
          <span className="self-center">
            <ButtonComp
              btnName={"Or continue shoppping"}
              btnTextColor={"text-primary hover:text-accent"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
