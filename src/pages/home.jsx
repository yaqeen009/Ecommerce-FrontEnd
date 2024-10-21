import Carousel from "../components/slider";
import useFetchData from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/card";
import Divider from "../components/divider";
import Category from "../components/categoryCard";

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
  const [sizeState, setSizeState]= useState(null)
  const [colorState, setColorState]= useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const url = "/public/data.json";                    //card data fetch 
  const { data, loading, error } = useFetchData(url);
  const cardData = data?.products?.featured || [];
  
  //slider images
  const images = [girl, gym, pitch];

  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      color: colorState,
      size: sizeState,
    }
    dispatch(addToCart(productToAdd))
    console.log("Item added to cart");
  }

  const handleProdClick = (productId) => {      //go to product page
    navigate(`/product/${productId + 1}`)
  }

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
