/*
component for custom product card with props (product image, name, price, btn to add product to cart)
and special props for handling product data states
*/

/* eslint-disable react/prop-types */
import ButtonComp from "./button";
import cart from "../assets/cart.svg";

const Card = ({ data, loading, error, image, name , price, imgClick, handleAddToCart,height, txtcol }) => {

  if (loading) {
    return (
      <div data-testid="loading-state" className="card flex flex-col flex-grow w-fit h-fit rounded-lg"></div>
    );
  }
  if (error) {
    return alert("Couldn't fetch data, please try again");
  }
  return (
    <div className={`card flex flex-col flex-grow w-full h-fit rounded-lg`}>
      {data && (
        <>
          <img
            alt="card-image"
            src={image}
            className={`rounded-lg w-[100%] h-[40vh] md:h-[20vh] cursor-pointer hover:opacity-70 duration-300 ease-in-out object-cover ${height}`}
            onClick={imgClick}
          />
          <div className="flex flex-row mt-4 w-full justify-between">
            <span className="text-font flex flex-col ml-4">
              <p className={`font-open_sans ${txtcol} lg:text-body md:text-tablet-body text-mobile-body`}>
                {name}
              </p>
              <p className={`font-roboto_slab ${txtcol} lg:text-body md:text-tablet-body text-mobile-body`}>
                ${price}
              </p>
            </span>
            <span className="mr-4">
              <ButtonComp
                data-testid = "btn-comp"
                btnIcon={cart}
                btnColor={"bg-accent border-font"}
                btnHover={"hover:bg-primary hover:border-background"}
                btnIconSize={"p-2"}
                btnFunction={handleAddToCart}
              />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
