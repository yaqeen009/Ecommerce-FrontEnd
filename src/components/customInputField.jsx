import { useState } from "react";
import visible from "../assets/visible.svg";
import invisible from "../assets/Invisible.svg";

const CustomInput = ({ inputName, inputType,required }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisbility = (e) => {
    e.preventDefault()
    setPasswordVisible(!passwordVisible);
  };

  return (
    <span className="relative flex items-center lg:w-[25vw] md:w-[50vw] w-[70vw] my-2">
      <input
        type={
          inputType === "password"
            ? passwordVisible
              ? "text"
              : "password"
            : inputType
        }
        required
        className="py-3 px-4 rounded-lg outline-none border border-secondary w-full"
      />
      <label
        htmlFor="placeholder"
        className="absolute lg:left-4 left-3 font-open_sans lg:text-label md:text-tablet-label text-mobile-label lg:-top-3 -top-2 bg-background text-font px-2"
      >
        {inputName}
      </label>
      {inputType === "password" && (
        <button className="absolute right-2" onClick={togglePasswordVisbility}>
          {passwordVisible ? <img src={invisible}/> : <img src={visible} />}
        </button>
      )}
    </span>
  );
};

export default CustomInput;
