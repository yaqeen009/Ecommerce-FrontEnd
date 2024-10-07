const ButtonComp = ({btnName, btnColor, btnHover, btnTextColor, btnFunction, btnIcon, btnIconSize, btnTextSize, btnBorder}) => {
    return ( 
        <div className="btn-comp">
                <button className={`${btnColor} ${btnHover} ${btnBorder} rounded-lg p-2 flex flex-row shadow-1dp duration-300 ease-in-out`} onClick={btnFunction}>
                    <img src={btnIcon} className={`flex justify-center ${btnIconSize}`}/>
                    <p className={`text-mobile-label md:text-tablet-label lg:text-label ${btnTextSize} ${btnTextColor}`}>{btnName}</p>
                </button>
        </div>
     );
}
 
export default ButtonComp;