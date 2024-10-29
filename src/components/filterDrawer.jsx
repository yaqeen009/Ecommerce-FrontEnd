import { useState } from "react";
import drawer from "../assets/open-accent.svg";

const Drawer = ({ name, filters,setFilterItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClick = (item) => {
    setFilterItem(item)
    setIsOpen(!isOpen)
    console.log(item);
    
  }
  return (
    <div className="filter-drawer relative">
      <span className="flex space-x-2 items-center" onClick={handleOpen}>
        <p className="font-open_sans text-font text-mobile-body md:text-tablet-body lg:text-body">
          {name}
        </p>
        <img
          src={drawer}
          alt=""
          className={`w-3 h-2 ${isOpen && `rotate-180`} duration-300 ease-in`}
        />
      </span>
      {isOpen && (
        <div className="flex flex-col pl-2 pr-4 bg-background absolute z-10 shadow-2dp rounded-sm">
          {filters.map((filter, index) => {
            return (
              <p
                onClick={()=>handleClick(filter)}
                key={index}
                className="text-nowrap font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label py-2 hover:bg-accent hover:text-background hover:-mr-4 hover:-ml-2 hover:pl-1 duration-150 "
              >
                {filter}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Drawer;