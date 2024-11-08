import ProcessBarComp from "./process";

const Process = ({ color1, color2, styleCol1, styleCol2, isBar1, isBar2, isBar3 }) => {
  return (
    <div className="checkout-process flex">
      <div className="relative flex flex-row items-center">
        <span className="w-full z-30">
          <ProcessBarComp
            color={isBar1 ? color2:color1}
            color2={isBar1 ? styleCol2 :styleCol1}
            name={"Cart"}
          />
        </span>
        <span className="w-full z-20">
          <ProcessBarComp
            color={isBar2 ? color2:color1}
            color2={isBar2 ? styleCol2 :styleCol1}
            name={"Checkout"}
          />
        </span>
        <span className="w-full z-10">
          <ProcessBarComp
            color={isBar3 ? color2:color1}
            color2={isBar3 ? styleCol2 :styleCol1}
            name={"Confirmation"}
          />
        </span>
      </div>
    </div>
  );
};

export default Process;
