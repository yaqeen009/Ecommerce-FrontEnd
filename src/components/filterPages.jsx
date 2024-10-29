import { useState } from "react";

const Pagination = ({page}) => {
  //states
  const [isActive, setIsActive] = useState(false);

  //click functionalities
  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <div
      className={`filter-pagination w-fit h-fit border rounded-lg hover:bg-[#B0B0B020] ${
        isActive ? `border-accent` : `border-secondary`
      }`}
      onClick={handleClick}
    >
      <p
        className={`px-5 py-3 font-open_sans  text-mobile-label md:text-tablet-label lg:text-label ${
          isActive ? `text-accent` : `text-font`
        }`}
      >
        {page}
      </p>
    </div>
  );
};

export default Pagination;
