/*
COMPONENT for custom inputs in account page, with props (input type, placeholder and disabled view)
*/


/* eslint-disable react/prop-types */
const AccountInput = ({ type, placeholder,disabled}) => {
    return (
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`outline-none bg-background pl-6 pt-4 pb-2 border-b-2 w-full font-open_sans ${disabled ? `text-secondary placeholder:text-secondary`:`text-font placeholder:text-font`} duration-300 ease-in-out placeholder:font-open_sans`}
        />
    );
  };
  
  export default AccountInput;
  