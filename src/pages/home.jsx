/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import Carousel from "../components/slider";
import useFetchData from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/card";
import Divider from "../components/divider";
import Category from "../components/categoryCard";
import { ToastContainer, toast } from "react-toastify";

//image imports
import gym from "../assets/slider/gym.jpg";
import girl from "../assets/slider/girl.jpg";
import pitch from "../assets/slider/pitch.jpg";
import boots from "../assets/cardImages/domboots.png";
import jersey from "../assets/cardImages/jerseys.png";
import ball from "../assets/cardImages/domball.png";
import accessory from "../assets/cardImages/footballaccessories.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../states/cartSlice";

const Home = () => {
  //states and hooks
  const [sizeState, setSizeState]= useState(null)
  const [colorState, setColorState]= useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  //data fetch
  const url = "/data.json"; 
  const { data, loading, error } = useFetchData(url);                   //card data fetch 
  const cardData = data?.products?.featured || [];
  
  //slider images
  const images = [girl, gym, pitch];

  //click functionalities
  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      color: colorState,
      size: sizeState,
    }
    dispatch(addToCart(productToAdd))
    toast.success('Item added to cart successfully!', {
      style: {
        backgroundColor: '#FEFEFE',
        color: '#4CAF50',
        boxShadow:'0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.20)'
    }})
  }
  const handleProdClick = (productId) => {      //go to product page
    navigate(`/product/${productId + 1}`)
  }

  //default color and size states
  useEffect(() => {
    if (cardData.length > 0) {
      if (cardData[0]?.colors?.length > 0) {
        setColorState(cardData[0].colors[0]);
      }
      if (cardData[0]?.sizes?.length > 0) {
        setSizeState(cardData[0].sizes[0]);
      }
    }
  }, [cardData]);
  
  return (
    <div className="home flex flex-col flex-grow flex-shrink bg-background">
      <Carousel images={images} btnPath={"/shop"} btnName={"Shop Now"} />
      <Divider name={"Featured Products"} />
      <div className="lg:mx-16 sm:mx-4 md:mx-8">
      <div className="grid grid-cols-3 sm:grid-cols-1 content-center lg:-mx-8 -mx-4">
        {cardData.map((item, index) => {
          return (
            <div className="lg:mx-8 mx-4 my-4">
              <Card
                key={index}
                loading={loading}
                error={error}
                data={data}
                image={item.image.large}
                name={item.name}
                price={item.price}
                imgClick={() => handleProdClick(index)}
                handleAddToCart={() => handleAddToCart(item)}
              />
            </div>
          );
        })}
      </div>
      <ToastContainer/>
      </div>
      <Divider name={"Shop by Category"} />
      <div className="flex flex-row sm:flex-col basis-1/4 my-6 mb-12 items-center lg:mx-16 sm:mx-4 md:mx-8">
          <Category image={boots} name={"Boots"} />
          <Category image={jersey} name={"Jerseys"} />
          <Category image={ball} name={"Balls"} />
          <Category image={accessory} name={"Accessories"} />
        </div>
    </div>
  );
};

export default Home;
