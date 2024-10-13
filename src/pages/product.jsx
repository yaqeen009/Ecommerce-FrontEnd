import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetch";

//icons
import check from "../assets/stockCheck.svg";
import starFilled from "../assets/star-filled.svg";
import starUnfilled from "../assets/star-outline.svg";
import { useState } from "react";
import ButtonComp from "../components/button";
import Card from "../components/card";

const Product = () => {
  //states
  const [colorState, setColorState] = useState(null);
  const [sizeState, setSizeState] = useState(null);

  const navigate = useNavigate();

  //set color state
  const colorClicked = (color) => {
    setColorState(color);
  };
  //set size state
  const sizeClicked = (size) => {
    setSizeState(size);
  };

  const handleProdClick = (productId) => {
    //go to product page
    navigate(`/product/${productId + 1}`);
  };

  //fetch product data from database
  const { productId } = useParams();
  const url = "/public/data.json";
  const { data, loading, error } = useFetchData(url);

  const productData = data?.products?.featured?.find(
    (item) => item.id === Number(productId)
  );
  const similarProdData = data?.products?.featured || [];

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
    <div className="product mx-4 md:mx-6 lg:mx-8">
      <h1 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind text-font hidden sm:flex">
        {productData.name}
      </h1>
      <div className="grid grid-cols-2 gap-8 w-full h-full sm:flex sm:flex-col sm:basis-0 my-4 md:my-16 lg:mt-12 sm:justify-center">
        <div className="col-span-1">
        <img
          src={productData.image.large}
          alt=""
          className="w-full h-[90%] md:h-full sm:h-[50vh] rounded-lg object-cover"
        />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-4 gap-y-8 h-1/2 md:h-full">
          <img
            src={productData.image.small1}
            alt=""
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src={productData.image.small2}
            alt=""
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src={productData.image.small3}
            alt=""
            className="rounded-lg h-full w-full object-cover"
          />
          <img
            src={productData.image.small4}
            alt=""
            className="rounded-lg h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row sm:flex-col justify-between">
        <div className="flex flex-col basis-1/3 md:basis-1/2 mx-4 sm:mx-0">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-font font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
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
            <div className="my-4 flex space-x-2 items-center">
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
            <div className="my-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
              {productData.sizes.map((size, index) => {
                return (
                  <span
                    key={index}
                    className={`cursor-pointer w-16 h-16 sm:w-12 sm:h-12 rounded-lg border text-center hover:border-secondary duration-150 ${
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
        <span className="w-[1px] h-[] md:h-[45vh] sm:h-[1px] sm:w-full sm:my-4 bg-secondary"></span>
        <div className="basis-2/3 flex flex-col mx-4 sm:mx-0">
          <h1 className="font-montserrat text-headlind text-font sm:hidden">
            {productData.name}
          </h1>
          <p className="text-mobile-body md:text-tablet-body lg:text-body font-open_sans text-font">
            {productData.description}
          </p>
          <div className="my-4">
            <h2 className="font-open_sans text-title text-font">Details</h2>
            <ul>
              {productData.details.map((detail, index) => {
                return (
                  <li key={index} className="flex flex-row space-x-1">
                    <p className="font-open_sans italic text-mobile-body md:text-tablet-body lg:text-body text-font">
                      {index + 1}.
                    </p>
                    <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body text-font">
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
                    <p className="font-open_sans italic text-mobile-body md:text-tablet-body lg:text-body text-font">
                      {index + 1}.
                    </p>
                    <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body text-font">
                      {shipping}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-8 mx-4 sm:mx-0">
        <h1 className="font-montserrat text-font text-mobile-headline md:text-tablet-headline lg:text-headlind">
          Customers also purchased...
        </h1>
        <div className="similar-products grid grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-1  sm:space-y-4">
          {similarProdData.map((similar, index) => {
            return (
              <Card
                key={index}
                data={data}
                error={error}
                loading={loading}
                image={similar.image.large}
                name={similar.name}
                price={similar.price}
                imgClick={() => handleProdClick(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
