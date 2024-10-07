import Carousel from "../components/slider";
import gloves from "../assets/slider/gloves.jpeg";
import ButtonComp from "../components/button";

const Shop = () => {
  const images = [gloves];
  return (
    <div className="shop flex flex-col flex-grow flex-shrink bg-background">
      <Carousel images={images} btnName={"See New Arrivals"} />
      <div className="w-full bg-[#FCFCFC]">
        <div className="lg:mx-20 lg:mt-8 lg:mb-4">
          <div className="flex justify-between items-center">
            <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline text-font">
              Trending Products
            </h1>
            <ButtonComp btnName={"See all"} btnTextColor={"text-accent"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
