import ProcessBarComp from "./process";

const Process = ({ color1, color2, styleCol1, styleCol2 }) => {
  return (
    <div className="checkout-process flex">
      <div className="relative flex flex-row items-center">
        <span className="w-full z-30">
          <ProcessBarComp
            color={color1}
            color2={styleCol1}
            name={"Cart"}
          />
        </span>
        <span className="w-full z-20">
          <ProcessBarComp
            color={color2}
            color2={styleCol2}
            name={"Checkout"}
          />
        </span>
        <span className="w-full z-10">
          <ProcessBarComp
            color={color1}
            color2={styleCol1}
            name={"Confirmation"}
          />
        </span>
      </div>
    </div>
  );
};

export default Process;
