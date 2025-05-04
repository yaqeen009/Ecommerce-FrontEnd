/*
component for custom btn for all pages 
*/

/* eslint-disable react/prop-types */
const ButtonComp = ({
  btnName,
  btnColor,
  btnHover,
  btnTextColor,
  btnFunction,
  btnIcon,
  btnIconSize,
  btnTextSize,
  btnBorder,
  btnType,
  btnDisabled,
  btnWidth
}) => {
  return (
    <div className="btn-comp">
      <button
        className={`${btnColor} ${btnHover} ${btnBorder} ${btnTextColor} ${btnWidth} rounded-lg p-2 flex flex-row shadow-1dp duration-300 ease-in-out `}
        onClick={btnFunction}
        type={btnType}
        disabled={btnDisabled}
      >
        <p
          className={`text-mobile-label md:text-tablet-label lg:text-label  text-center ${btnTextSize} `}
        >
          {btnName}
        </p>
        <img src={btnIcon} className={`flex justify-center ${btnIconSize}`} />
      </button>
    </div>
  );
};

export default ButtonComp;
