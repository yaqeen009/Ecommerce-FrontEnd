import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetch";

//icons
import check from "../assets/stockCheck.svg";
import starFilled from "../assets/star-filled.svg";
import starUnfilled from "../assets/star-outline.svg";
import { useState } from "react";
import ButtonComp from "../components/button";

const Product = () => {
  //states
  const [colorState, setColorState] = useState(null);
  const [sizeState, setSizeState] = useState(null);

  //set color state
  const colorClicked = (color) => {
    setColorState(color);
  };
  //set size state
  const sizeClicked = (size) => {
    setSizeState(size);
  };

  //fetch product data from database
  const { productId } = useParams();
  const url = "/public/data.json";
  const { data, loading, error } = useFetchData(url);

  const productData = data?.products?.featured?.find(
    (item) => item.id === Number(productId)
  );

  if (loading) {
    return <p>Loading please wait...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (!productData) {
    return <p>Product not found</p>;
  }

  //rating icon rendering
  const rendeStars = (rating) => {
    const stars = [];
    //for filled stars
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={starFilled} key={`filled-${i}`} />);
    }
    //for unfilled stars
    for (let i = rating; i < 5; i++) {
      stars.push(<img src={starUnfilled} key={`unfilled-${i}`} />);
    }
    return stars;
  };

  return (
    <div className="product mx-8">
      <div className="flex flex-row basis-1/3 space-x-8 lg:my-20 justify-center">
        <img
          src={productData.image.large}
          alt=""
          className="w-1/3 h-full rounded-lg object-cover"
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 h-1/2">
          <img
            src={productData.image.small1}
            alt=""
            className="rounded-lg lg:h-[35vh] md:h-4/5 w-full object-cover"
          />
          <img
            src={productData.image.small2}
            alt=""
            className="rounded-lg lg:h-[35vh] md:h-4/5 w-full object-cover"
          />
          <img
            src={productData.image.small3}
            alt=""
            className="rounded-lg lg:h-[35vh] md:h-4/5 w-full object-cover"
          />
          <img
            src={productData.image.small4}
            alt=""
            className="rounded-lg lg:h-[35vh] md:h-4/5 w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col basis-1/3 mx-4">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-font font-montserrat text-headlind">
              ${productData.price}
            </h2>
            <span className="flex space-x-2 items-center">
              <p className="font-open_sans text-mobile-label md:text-tablet-label lg:text-label text-accent">
                {productData.availability}
              </p>
              <img src={check} alt="" />
            </span>
          </div>
          <div className="flex flex-row items-center space-x-8 mb-8">
            <span className="flex space-x-3">
              {rendeStars(Number(productData.rating))}
            </span>
            <p className="font-roboto_slab text-label text-font">50 reviews</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-font text-mobile-title md:text-tablet-title lg:text-title">
              Available Colors
            </p>
            <div className="lg:my-4 flex space-x-2 items-center">
              {productData.colors.map((color, index) => {
                return (
                  <span
                    key={index}
                    className={`rounded-full cursor-pointer hover:opacity-75 duration-150 ${
                      colorState === color
                        ? `border-4 border-[${color}] opacity-90 w-12 h-12 `
                        : `border-2 border-transparent w-10 h-10 `
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => colorClicked(color)}
                  ></span>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-start mb-8">
            <p className="text-font text-mobile-title md:text-tablet-title lg:text-title">
              Available Sizes
            </p>
            <div className="grid grid-cols-4 gap-2">
              {productData.sizes.map((size, index) => {
                return (
                  <span
                    key={index}
                    className={`cursor-pointer w-16 h-16 rounded-lg border text-center hover:border-secondary duration-150 ${
                      sizeState === size
                        ? `border-accent text-accent`
                        : `border-font text-font`
                    }`}
                    onClick={() => sizeClicked(size)}
                  >
                    <p className="p-[25%] text-label font-open_sans">{size}</p>
                  </span>
                );
              })}
            </div>
          </div>
          <ButtonComp
            btnName={"Add to Cart"}
            btnHover={"hover:bg-primary"}
            btnColor={"bg-accent w-full mb-4"}
            btnTextSize={"px-[40%] py-2"}
            btnTextColor={"text-background"}
          />
        </div>
        <span className="w-[1px] h-[60vh] bg-secondary"></span>
        <div className="basis-2/3 flex flex-col mx-4">
          <h1 className="font-montserrat text-headlind text-font">
            {productData.name}
          </h1>
          <p className="text-body font-open_sans text-font">
            {productData.description}
          </p>
          <div className="my-4">
            <h2 className="font-open_sans text-title text-font">Details</h2>
            <ul>
              {productData.details.map((detail, index) => {
                return (
                  <li key={index} className="flex flex-row space-x-1">
                    <p className="font-open_sans italic text-body text-font">
                      {index + 1}.
                    </p>
                    <p className="font-open_sans text-body text-font">
                      {detail}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="my-2">
            <h2 className="font-open_sans text-title text-font">Shipping</h2>
            <ul>
              {productData.shipping.map((shipping, index) => {
                return (
                  <li key={index} className="flex flex-row space-x-1">
                    <p className="font-open_sans italic text-body text-font">
                      {index + 1}.
                    </p>
                    <p className="font-open_sans text-body text-font">
                      {shipping}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
