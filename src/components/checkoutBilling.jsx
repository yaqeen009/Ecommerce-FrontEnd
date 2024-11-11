//images
import check from "../assets/checked.svg";
import uncheck from "../assets/unchecked.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CustomInput from "./customInputField";
import { useSelector } from "react-redux";

const Billing = ({ isChecked, handleCheck, submitForm, setBillingDetails }) => {
  //states
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  //validation schema
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

  //form validation
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const billingVals = watch();
  //functionalities
  useEffect(() => {
    if (isAuthenticated && user.billing) {
      setValue("firstname", user.billing.firstName);
      setValue("lastname", user.billing.lastName);
      setValue("address", user.billing.address);
      setValue("phone", user.billing.contact);
      setValue("city", user.billing.city);
      setValue("apartment", user.billing.apartment);
    }
  }, [isAuthenticated, user, setValue]);

  useEffect(() => {
    setBillingDetails(billingVals);
  }, [billingVals, setBillingDetails]);
  return (
    <div className="billing-details w-full mr-2 mb-4">
      <h1 className="font-montserrat text-primary text-mobile-title md:text-tablet-title lg:text-title">
        Billing Address
      </h1>
      <div className=" w-full my-4 ">
        <form  onSubmit={handleSubmit(submitForm)} className="w-full grid grid-cols-1 gap-y-2 mb-4"
        >
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
        <span className="flex space-x-2">
          <button onClick={handleCheck}>
            {isChecked ? (
              <img src={check} alt="" />
            ) : (
              <img src={uncheck} alt="" />
            )}
          </button>
          <p className="font-open_sans lg:text-label md:text-tablet-label text-mobile-label">
            Same as shipping
          </p>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Billing;
