import reduceBtn from "../assets/reduce.svg";
import expandBtn from "../assets/expand.svg";
import drawer from "../assets/open-accent.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CustomInput from "../components/customInputField";



  //validation schema
  const schema = yup.object().shape({
    bankname: yup.string().when("isBank", {
      is: true,
      then: yup
        .string()
        .required("Bank Name is required")
        .min(4, "Bank name must be at least 4 characters"),
    }),
    accountname: yup.string().when("isBank", {
      is: true,
      then: yup
        .string()
        .required("Account name is required")
        .min(8, "Please enter a valid account name"),
    }),
    accountnum: yup.string().when("isBank", {
      is: true,
      then: yup
      .string()
        .required("Account number is required")
        .min(14, "Please enter a valid account number"),
    }),
    momonum: yup.string().when("isMomo", {
      is: true,
      then: yup
      .string()
        .required("Mobile money number is required")
        .min(10, "Please enter a valid mobile money number"),
    }),
    momoprovider: yup.string().when("isMomo", {
      is: true,
      then: yup.string().required("Please select a mobile money provider"),
    }),
  });

const Payment = ({
  submitForm,
  setPaymentDetails,
  isBank,
  setIsBank,
  isMomo,
  setIsMomo,
}) => {
  //states and hooks
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const paymentVals = watch();

  // Sync payment details with form data and selected provider
  useEffect(() => {
    setPaymentDetails({
      ...paymentVals,
      momoprovider: selectedProvider,
    });
  }, [paymentVals, selectedProvider, setPaymentDetails]);
  

  //functionalities and click events
  const handleExpandBank = () => {
    setIsBank((prev) => !prev);
    setIsMomo(false);
  };
  const handleExpandMomo = () => {
    setIsBank(false);
    setIsMomo((prev) => !prev);
  };
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClick = (provider) => {
    setSelectedProvider(provider); // Set the selected provider
    setValue("momoprovider", provider); // Set the value in form
    setIsOpen(false); // Close the drawer
    console.log(provider);
  };
 
  //objects
  const mobileMoney = ["MTN Mobile Money", "Telecel Pay", "AT Money"];

  return (
    <div>
      <div className="my-4">
        <h1 className="font-montserrat text-primary lg:text-title md:text-tablet-title text-mobile-title">
          Payment Option
        </h1>
        <hr />
      </div>
      <div className="bank-payment">
        <span className="my-4 flex justify-between">
          <p>Bank</p>
          <button onClick={handleExpandBank}>
            {isBank ? (
              <img src={reduceBtn} alt="" />
            ) : (
              <img src={expandBtn} alt="" />
            )}
          </button>
        </span>
        <div className="payment-form w-full my-4">
          {isBank && (
            <form
              action=""
              className="w-full grid grid-cols-1 gap-y-2 mb-4"
              onSubmit={handleSubmit(submitForm)}
            >
              <CustomInput
                inputName={"Bank Name"}
                inputType={"text"}
                register={register}
                validationName={"bankname"}
                isRequired={true}
                errors={errors}
                checkout={true}
              />
              <CustomInput
                inputName={"Account Name"}
                inputType={"text"}
                register={register}
                validationName={"accountname"}
                isRequired={true}
                errors={errors}
                checkout={true}
              />
              <CustomInput
                inputName={"Account Number"}
                inputType={"text"}
                register={register}
                validationName={"accountnum"}
                isRequired={true}
                errors={errors}
                checkout={true}
              />
            </form>
          )}
          <hr />
        </div>
      </div>
      <div className="momo-payment">
        <span className="my-4 flex justify-between">
          <p>Mobile Money</p>
          <button onClick={handleExpandMomo}>
            {isMomo ? (
              <img src={reduceBtn} alt="" />
            ) : (
              <img src={expandBtn} alt="" />
            )}
          </button>
        </span>
        <div className="payment-form w-full my-4">
          {isMomo && (
            <form
              action=""
              className="w-full grid grid-cols-2 gap-x-2 mb-4 items-baseline"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="drawer relative mb-2">
                <span onClick={handleOpen}>
                  <div className="flex space-x-2 items-center py-3 px-4 border border-secondary rounded-lg">
                    <p className="font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label ">
                      {selectedProvider || "Select mobile network"}
                    </p>
                    <img
                      src={drawer}
                      alt=""
                      className={`w-3 h-2 ${
                        isOpen && `rotate-180`
                      } duration-300 ease-in`}
                    />
                  </div>
                </span>
                {isOpen && (
                  <div className="flex flex-col pl-2 pr-4 bg-background absolute z-10 shadow-2dp rounded-sm">
                    {mobileMoney.map((filter, index) => (
                      <p
                        onClick={() => handleClick(filter)}
                        key={index}
                        className="text-nowrap font-open_sans text-font text-mobile-label md:text-tablet-label lg:text-label py-2 hover:bg-accent hover:text-background hover:-mr-4 hover:-ml-2 hover:pl-1 duration-150"
                      >
                        {filter}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <CustomInput
                inputName={"Mobile Money Number"}
                inputType={"text"}
                register={register}
                validationName={"momonum"}
                isRequired={true}
                errors={errors}
                checkout={true}
              />
            </form>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Payment;
