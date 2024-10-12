import Carousel from "../components/slider";
import gym from "../assets/slider/gym.jpg";
import girl from "../assets/slider/girl.jpg";
import pitch from "../assets/slider/pitch.jpg";
import Divider from "../components/divider";
import Card from "../components/card";
import Category from "../components/categoryCard";
import boots from "../assets/cardImages/domboots.png";
import jersey from "../assets/cardImages/jerseys.png";
import ball from "../assets/cardImages/domball.png";
import accessory from "../assets/cardImages/footballaccessories.jpg";
import useFetchData from "../hooks/useFetch";
import Helmet from 'react-helmet'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  
  const url = "/public/data.json";                    //card data fetch 
  const { data, loading, error } = useFetchData(url);
  const cardData = data?.products?.featured || [];
  
  //slider images
  const images = [girl, gym, pitch];

  const handleProdClick = (productId) => {
    //go to product page
    navigate(`/product/${productId + 1}`)
  }
  return (
    <div className="home flex flex-col flex-grow flex-shrink bg-background">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel images={images} btnPath={"/shop"} btnName={"Shop Now"} />
      <Divider name={"Featured Products"} />
      <div className="flex flex-row sm:flex-col lg:mx-16 sm:mx-4 md:mx-8 md:space-x-6 lg:space-x-32 sm:space-y-4 my-6 justify-center">
        {cardData.map((item, index) => {
          return (
            <div className="basis-1/3 justify-center flex">
              <Card
                key={index}
                loading={loading}
                error={error}
                data={data}
                image={item.image.large}
                name={item.name}
                price={item.price}
                imgClick={() => handleProdClick(index)}
              />
            </div>
          );
        })}
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
