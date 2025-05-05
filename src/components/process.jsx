/* eslint-disable react/prop-types */
const ProcessBarComp = ({ color,color2, name,bgcol }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-center relative">
        <span className={`${color} w-40 h-12 flex items-center rounded-xl`}></span>
        <span
          className="absolute -left-[3px] rounded-lg"
          style={{
            height: "52px",
            aspectRatio: "cos(30deg)",
            clipPath: "polygon(0 0,100% 50%,0 100%)",
            background: `${bgcol}`,
          }}
        ></span>
        <p className="absolute pl-10 font-open_sans text-success-500 z-20">{name}</p>
        <span
          className="absolute -right-1/4 mr-2 rounded-2xl z-10"
          style={{
            height: "52px",
            aspectRatio: "cos(30deg)",
            clipPath: "polygon(0 0,100% 50%,0 100%)",
            background: `${color2}`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default ProcessBarComp;