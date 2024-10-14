import CartItem from "../components/cartItem";

const Cart = () => {
  return (
    <div className="cart lg:mx-8  mx-4 lg:mt-16 bg-background">
      <h1 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
        Shopping Cart
      </h1>
      <div className="">
        <div className="">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default Cart;
