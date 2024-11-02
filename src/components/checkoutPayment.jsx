//image imports
import reduceBtn from "../assets/reduce.svg";
import expandBtn from "../assets/expand.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import CustomInput from "../components/customInputField";

const Payment = ({submitForm}) => {
  const [isBank, setIsBank] = useState(false);
  const [isMomo, setIsMomo] = useState(false);

  const schema = yup.object().shape({
    bankname: yup
      .string()
      .required("Bank Name is required")
      .min(4, "Bank name must be at least 4 characters"),
    accountname: yup
      .string()
      .required("Account name is required")
      .min(8, "Please enter a valid account name"),
    accounnum: yup
      .string()
      .required("Account number is required")
      .min(14, "Please enter a valid account number"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleExpandBank = () => {
    setIsBank((prev) => !prev);
    setIsMomo(false);
  };
  const handleExpandMomo = () => {
    setIsBank(false);
    setIsMomo((prev) => !prev);
  };

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
                validationName={"bankname"}
                isRequired={true}
                errors={errors}
                checkout={true}
              />
              <CustomInput
                inputName={"Account Number"}
                inputType={"text"}
                register={register}
                validationName={"bankname"}
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
              className="w-full grid grid-cols-1 gap-y-2 mb-4"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="flex flex-col">
                <label htmlFor="">Select Network</label>
                <select name="network" id="">
                  <option value="">MTN Mobile Money</option>
                  <option value="">Telecel Pay</option>
                  <option value="">AirtelTigo Money</option>
                </select>
              </div>
              <CustomInput
                inputName={"Mobile Money Number"}
                inputType={"text"}
                register={register}
                validationName={"bankname"}
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
