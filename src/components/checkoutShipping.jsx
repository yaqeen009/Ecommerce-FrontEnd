/* eslint-disable react/prop-types */
//image imports
import reduceBtn from "../assets/reduce.svg";
import expandBtn from "../assets/expand.svg";
import disabledExpand from "../assets/expand_disabled.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CustomInput from "./customInputField";
import { useSelector } from "react-redux";

const Shipping = ({ isDisabled, submitForm , setShippingDetails}) => {
  //states
  const [isExpanded, setIsExpanded] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  //validation and validation schema
  const schema = yup.object().shape({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    address: yup.string().required("Address is required"),
    phone: yup
      .string()
      .required("Account number is required")
      .min(10, "Please enter a valid phone number"),
    city: yup.string().required("City name is required"),
    apartment: yup.string(),
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const shippingVals = watch()

  useEffect(() => {
    if (isAuthenticated && user.billing) {
      setValue("firstname", user.shipping.firstName);
      setValue("lastname", user.shipping.lastName);
      setValue("address", user.shipping.address);
      setValue("phone", user.shipping.contact);
      setValue("city", user.shipping.city);
      setValue("apartment", user.shipping.apartment);
    }
  }, [isAuthenticated, user, setValue]);

  useEffect(() => {
    setShippingDetails(shippingVals)
  }, [shippingVals, setShippingDetails])

  //functionalities
  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="billing-details w-full mr-2">
      <span className="flex flex-row justify-between">
        <h1 className="font-montserrat text-primary text-mobile-title md:text-tablet-title lg:text-title">
          Shipping Address
        </h1>

        {isDisabled ? (
          <img src={disabledExpand} alt="" />
        ) : (
          <button onClick={handleExpand}>
            {isExpanded ? (
              <img src={reduceBtn} alt="" />
            ) : (
              <img src={expandBtn} alt="" />
            )}
          </button>
        )}
      </span>
      <div className=" w-full my-4 ">
        {(isExpanded && !isDisabled) && (
          <form onSubmit={handleSubmit(submitForm)} action="" className="w-full grid grid-cols-1 gap-y-2 mb-4">
            <div className="grid grid-cols-2 gap-x-2">
              <CustomInput
                inputName={"First name"}
                inputType={"text"}
                errors={errors}
                validationName={"firstname"}
                register={register}
                checkout={true}
              />
              <CustomInput
                inputName={"Last name"}
                inputType={"text"}
                errors={errors}
                validationName={"lastname"}
                register={register}
                checkout={true}
              />
            </div>
            <CustomInput
              inputName={"Address"}
              inputType={"text"}
              errors={errors}
              validationName={"address"}
              register={register}
              checkout={true}
            />
            <CustomInput
              inputName={"Phone"}
              inputType={"text"}
              errors={errors}
              validationName={"phone"}
              register={register}
              checkout={true}
            />
            <div className="grid grid-cols-2 gap-x-2">
              <CustomInput
                inputName={"City"}
                inputType={"text"}
                errors={errors}
                validationName={"city"}
                register={register}
                checkout={true}
              />
              <CustomInput
                inputName={"Apartment, suite, etc (Optional)"}
                inputType={"text"}
                errors={errors}
                validationName={"apartment"}
                register={register}
                checkout={true}
              />
            </div>
          </form>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Shipping;
