import CancelBtn from "../assets/cancel";

const Tag = ({tagName}) => {
    return ( 
        <div className="filter-tag">
            <span className="flex space-x-4 border-[1px] border-accent px-2 py-1 rounded-2xl">
                <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">{tagName}</p>
                <button>
                    <CancelBtn color={'#4CAF50'}/>
                </button>
            </span>
        </div>
     );
}
 
export default Tag;