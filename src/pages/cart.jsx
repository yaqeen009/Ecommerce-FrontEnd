import { useSelector } from "react-redux";
import ButtonComp from "../components/button";
import CartItem from "../components/cartItem";
import CartSummary from "../components/cartSummary";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.svg";
const Cart = () => {
  //states and hooks
  const navigate = useNavigate();
  //get redux states
  const cart = useSelector((state) => state.cart.cart);
  const { totalPrice } = useSelector((state) => state.cart);

  //functionalities
  const goToCheckout = () => {
    navigate("/checkout");
  };
  const goToShopping = () => {
    navigate("/shop");
  };
  return (
    <div className="cart lg:mx-8 mx-4 lg:my-16 my-8 bg-background h-screen sm:h-full">
      {cart.length > 0 ? (
        <>
          <h1 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
            Shopping Cart
          </h1>
          <div className="flex flex-row sm:flex-col w-full space-x-8 sm:space-x-0">
            <div className="w-2/3 md:w-1/2 sm:w-full">
              {cart.map((item) => {
                return (
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
                    isCheckOut={false}
                  />
                );
              })}
            </div>

            <div className="flex flex-col w-1/3 md:w-1/2 sm:w-full space-y-4">
              <CartSummary
                subtotal={totalPrice.toFixed(2)}
                delivery={(5.0).toFixed(2)}
                tax={(7.49).toFixed(2)}
                promo={(10.0).toFixed(2)}
                orderTotal={Math.floor(totalPrice + 5.0 + 7.49 - 10.0).toFixed(
                  2
                )}
              />
              <ButtonComp
                btnName={"Proceed to Checkout"}
                btnColor={"bg-accent w-full justify-center"}
                btnHover={"hover:bg-primary"}
                btnTextColor={"text-background"}
                btnTextSize={"py-2"}
                btnFunction={goToCheckout}
              />
              <span className="self-center">
                <ButtonComp
                  btnName={"Or continue shoppping"}
                  btnTextColor={"text-primary hover:text-accent"}
                  btnFunction={goToShopping}
                />
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-[100vh] relative top-8 flex justify-center">
          <div className="w-fit h-fit items-center text-font rounded-lg p-12 bg-background shadow-2dp flex flex-col space-y-4">
            <h2 className="font-montserrat text-mobile-title md:text-tablet-title lg:text-title">
              Oops! Your cart seems to be empty
            </h2>
            <img className="w-fit" src={emptyCart} alt="" />
            <p className="text-center font-open_sans text-mobile-body md:text-tablet-body lg:text-body">
              Want to add an item to your cart? <br /> Go to <span onClick={goToShopping} className="text-accent hover:text-primary cursor-pointer">Shop</span> to add an item
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
