import CancelBtn from "../assets/cancel";

const Tag = ({name, btnFunction}) => {
    return ( 
        <div className="filter-tag">
            <span className="flex space-x-3 items-center border-[1px] rounded-full border-accent px-3 py-1">
                <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">{name}</p>
                <button onClick={btnFunction}><CancelBtn color={"#FF1F00"}/></button>
            </span>
        </div>
     );
}
 
export default Tag;