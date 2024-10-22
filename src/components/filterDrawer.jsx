import { useState } from "react";
//image imports
import open from "../assets/open-accent.svg";

const Drawer = ({ filters, name, handleItemClick }) => {
  //states and hooks
  const [isOpen, setIsOpen] = useState(false);

  //click functionalities
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-drawer relative">
      <span
        className="flex space-x-2 items-center cursor-pointer mb-1"
        onClick={handleOpen}
      >
        <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label">
          {name}
        </p>
        <img
          src={open}
          className={`w-3 duration-300 ease-in-out ${isOpen && "rotate-180"}`}
          alt=""
        />
      </span>
      <span
        onMouseDown={handleOpen}
        className={`flex-col absolute z-10 bg-background shadow-2dp px-4 w-fit ${
          isOpen ? `flex` : `hidden`
        }`}
      >
        {filters.map((filter, id) => {
          return (
            <p
              onClick={() => handleItemClick(filter)}
              className="text-nowrap text-mobile-label md:text-tablet-label lg:text-label font-open_sans text-font py-2 hover:bg-accent hover:text-background hover:-mx-4 hover:px-2  duration-300 ease-in-out"
              key={id}
            >
              {filter}
            </p>
          );
        })}
      </span>
    </div>
  );
};

export default Drawer;
