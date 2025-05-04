/* eslint-disable react/prop-types */
import { useState } from "react";
import visible from "../assets/visible.svg";
import invisible from "../assets/Invisible.svg";

const CustomInput = ({
  inputName,
  inputType,
  register,
  errors,
  validationName,
  isRequired,
  checkout,
  sentence
}) => {
  //states
  const [passwordVisible, setPasswordVisible] = useState(false);

  //functionalities
  const togglePasswordVisbility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <span
      className={`relative flex items-center  my-2  ${
        checkout ? `w-full ` : `lg:w-[25vw] md:w-[50vw] w-[70vw]`
      }`}
    >
      <input
        type={
          inputType === "password"
            ? passwordVisible
              ? "text"
              : "password"
            : inputType
        }
        {...register(validationName, { required: isRequired })}
        className={`py-3 px-4 rounded-lg outline-accent border border-font  w-full ${sentence}  ${
          errors[validationName] ? "border-danger-100" : "border-secondary"
        }`}
      />
      <label
        htmlFor="placeholder"
        className="absolute lg:left-4 left-3 font-open_sans lg:text-label md:text-tablet-label text-mobile-label lg:-top-3 -top-2 bg-background text-font px-2"
      >
        {inputName}
      </label>
      {inputType === "password" && (
        <button className="absolute right-2" onClick={togglePasswordVisbility}>
          {passwordVisible ? <img src={invisible} /> : <img src={visible} />}
        </button>
      )}
      {errors[validationName] && (
        <p className="absolute lg:left-4 left-3 font-open_sans lg:text-label md:text-tablet-label text-mobile-label lg:-top-3 -top-2 bg-background text-danger-100 px-2">
          {errors[validationName]?.message}
        </p>
      )}
    </span>
  );
};

export default CustomInput;
