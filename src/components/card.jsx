import ButtonComp from "./button";
import cart from "../assets/cart.svg";


const Card = ({ data, loading, error, image, name , price }) => {
  if (loading) {
    return (
      <div className="card flex flex-col flex-grow w-fit h-fit rounded-lg"></div>
    );
  }
  if (error) {
    return alert("Couldn't fetch data, please try again");
  }
  return (
    <div className="card flex flex-col flex-grow w-full h-fit rounded-lg">
      {data && (
        <>
          <img
            src={image}
            className="rounded-lg w-[100%] h-[40vh] md:h-[20vh]  hover:opacity-70 duration-300 ease-in-out object-cover"
          />
          <div className="flex flex-row mt-4 w-full justify-between">
            <span className="text-font flex flex-col ml-4">
              <p className="font-open_sans lg:text-body md:text-tablet-body text-mobile-body">
                {name}
              </p>
              <p className="font-roboto_slab lg:text-body md:text-tablet-body text-mobile-body">
                ${price}
              </p>
            </span>
            <span className="mr-4">
              <ButtonComp
                btnIcon={cart}
                btnColor={"bg-accent border-font"}
                btnHover={"hover:bg-primary hover:border-background"}
                btnIconSize={"p-2"}
              />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
