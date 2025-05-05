/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import Carousel from "../components/slider";
import gloves from "../assets/slider/gloves.jpeg";
import ButtonComp from "../components/button";
import useFetchData from "../hooks/useFetch";
import Card from "../components/card";
import Category from "../components/categoryCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../states/cartSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
//image imports 
import boots from "../assets/cardImages/domboots.png";
import jersey from "../assets/cardImages/jerseys.png";
import ball from "../assets/cardImages/domball.png";
import accessory from "../assets/cardImages/footballaccessories.jpg";

const Shop = () => {
  const [sizeState, setSizeState]= useState(null)
  const [colorState, setColorState]= useState(null)

  //hooks 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //click functionalities
  const handleProdClick = (productId) => {
    navigate(`/product/${productId + 1}`)
  }
  const gotoCategories =(category) => {
    navigate(`/categories/${category}`)
  }
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

  //data fetching 
  const url = "/data.json";
  const { data, loading, error } = useFetchData(url);
  const trendingData = data?.products?.trending || []; //for trending data
  const newArrivals = data?.products?.newArrivals || []; //for new arrivals data

  // set default color and size 
  useEffect(() => {
    if (trendingData.length > 0) {
      if (trendingData[0]?.colors?.length > 0) {
        setColorState(trendingData[0].colors[0]);
      }
      if (trendingData[0]?.sizes?.length > 0) {
        setSizeState(trendingData[0].sizes[0]);
      }
    }
    if (newArrivals.length > 0) {
      if (newArrivals[0]?.colors?.length > 0) {
        setColorState(newArrivals[0].colors[0]);
      }
      if (newArrivals[0]?.sizes?.length > 0) {
        setSizeState(newArrivals[0].sizes[0]);
      }
    }
  }, [trendingData, newArrivals]);

  const categoryNames = {
    trending: "Trending",
    newarrivals: "New Arrivals",
    boots: "Boots",
    jerseys: "Jerseys",
    accessories: "Accessories",
    gloves: "Gloves",
    balls: "Balls",
  }

  const images = [gloves]; //images for carousel
  return (
    <div className="shop flex flex-col flex-grow flex-shrink bg-background">
      <Carousel images={images} btnName={"See New Arrivals"} />
      <div className="w-full bg-[#FCFCFC]">
        <div className="lg:mx-16 sm:mx-4 md:mx-8 lg:mt-8 lg:mb-4 my-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline text-font">
              {categoryNames.trending} Products
            </h1>
            <ButtonComp btnName={"See all"} btnTextColor={"text-accent"} btnFunction={()=>gotoCategories(categoryNames.trending.toLowerCase())}/>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-1 content-center lg:-mx-8 -mx-4">
            {trendingData.map((item, index) => {
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
                    handleAddToCart={()=>handleAddToCart(item)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:mx-16 sm:mx-4 md:mx-8 lg:mt-8 lg:mb-4 my-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline text-font">
            Shop by Category
          </h1>
        </div>
        <div className="flex flex-row sm:flex-col basis-1/4 my-6 mb-12 items-center lg:-mx-4">
          <Category image={boots} name={"Boots"} gotoCategory={()=>gotoCategories(categoryNames.boots.toLowerCase())}/>
          <Category image={jersey} name={"Jerseys"} gotoCategory={()=>gotoCategories(categoryNames.jerseys.toLowerCase())}/>
          <Category image={ball} name={"Balls"} gotoCategory={()=>gotoCategories(categoryNames.balls.toLowerCase())}/>
          <Category image={accessory} name={"Accessories"} gotoCategory={()=>gotoCategories(categoryNames.accessories.toLowerCase())}/>
        </div>
      </div>
      <div className="lg:mx-16 sm:mx-4 md:mx-8 lg:mt-8 lg:mb-4 my-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline text-font">
            {categoryNames.newarrivals}
          </h1>
          <ButtonComp btnName={"See all"} btnTextColor={"text-accent"} btnFunction={()=>gotoCategories(categoryNames.newarrivals.toLowerCase())}/>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 content-center lg:-mx-8 -mx-4">
          {newArrivals.map((item, index) => {
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
                  handleAddToCart={()=>handleAddToCart(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Shop;
