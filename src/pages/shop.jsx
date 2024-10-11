import Carousel from "../components/slider";
import gloves from "../assets/slider/gloves.jpeg";
import ButtonComp from "../components/button";
import useFetchData from "../hooks/useFetch";
import Card from "../components/card";
import Category from "../components/categoryCard";
import boots from "../assets/cardImages/domboots.png";
import jersey from "../assets/cardImages/jerseys.png";
import ball from "../assets/cardImages/domball.png";
import accessory from "../assets/cardImages/footballaccessories.jpg";

const Shop = () => {
  const url = "/public/data.json";
  const { data, loading, error } = useFetchData(url);
  const trendingData = data?.products?.trending || []; //for trending data
  const newArrivals = data?.products?.newArrivals || []; //for new arrivals data

  const images = [gloves]; //images for carousel
  return (
    <div className="shop flex flex-col flex-grow flex-shrink bg-background">
      <Carousel images={images} btnName={"See New Arrivals"} />
      <div className="w-full bg-[#FCFCFC]">
        <div className="lg:mx-16 sm:mx-4 md:mx-8 lg:mt-8 lg:mb-4 my-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline text-font">
              Trending Products
            </h1>
            <ButtonComp btnName={"See all"} btnTextColor={"text-accent"} />
          </div>
          {/* put data here */}
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
          <ButtonComp btnName={"See all"} btnTextColor={"text-accent"} />
        </div>
        <div className="flex flex-row sm:flex-col basis-1/4 my-6 mb-12 items-center lg:-mx-4">
          <Category image={boots} name={"Boots"} />
          <Category image={jersey} name={"Jerseys"} />
          <Category image={ball} name={"Balls"} />
          <Category image={accessory} name={"Accessories"} />
        </div>
      </div>
      <div className="lg:mx-16 sm:mx-4 md:mx-8 lg:mt-8 lg:mb-4 my-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline text-font">
            New Arrivals
          </h1>
          <ButtonComp btnName={"See all"} btnTextColor={"text-accent"} />
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
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
