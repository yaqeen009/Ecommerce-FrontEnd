import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//navigation link
const NavComp = ({ name, path, expand }) => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsClicked(location.pathname === path);
  }, [location.pathname, path]);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <Link to={path}>
      <span
      className="mt-4"
        onClick={handleClick && expand}
      >
        <p className={`font-open_sans text-mobile-body md:text-tablet-body  mx-2 lg:text-body text-font duration-300 ease-in-out ${
          isClicked
            ? `border-b-2  px-2 lg:border-success-100 border-background`
            : `border-b-2  px-0 hover:px-2 lg:border-white lg:hover:border-accent border-background hover:border-background`
        }`}>{name}</p>
      </span>
    </Link>
  );
};

export default NavComp;
