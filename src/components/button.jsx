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
}) => {
  return (
    <div className="btn-comp">
      <button
        className={`${btnColor} ${btnHover} ${btnBorder} ${btnTextColor} rounded-lg p-2 flex flex-row shadow-1dp duration-300 ease-in-out`}
        onClick={btnFunction}
      >
        <p
          className={`text-mobile-label md:text-tablet-label lg:text-label ${btnTextSize} `}
        >
          {btnName}
        </p>
        <img src={btnIcon} className={`flex justify-center ${btnIconSize}`} />
      </button>
    </div>
  );
};

export default ButtonComp;
