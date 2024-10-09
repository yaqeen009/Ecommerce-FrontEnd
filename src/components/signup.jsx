import CustomInput from "./customInputField";
import google from "../assets/google.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from 'react-redux'
import { signUp } from "../states/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = ({ signedUp, isOpen }) => {
  const navigate = useNavigate()
  //redux connection
  const dispatch = useDispatch()
  const {isAuthenticated, user, error} = useSelector((state) => state.auth)
  //redirect after auth
  if (isAuthenticated) {
    navigate('/')
  }
  //form schema
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  // Initialize the form with react-hook-form and yup schema resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), //yup for validation
  });

  // Handle form submission
  const onSubmit = (data) => {
    const {username, email, password} = data
    dispatch(signUp({username, email, password}))
    console.log(user);
    
  };
  return (
    <div className="sign-up flex justify-center mt-8 bg-background">
      {isOpen && (
        <div className="flex flex-col">
          <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline">
            Sign Up
          </h1>
          <div className="w-fit h-fit flex flex-col lg:py-16 md:py-12 py-8 px-4 md:px-6 lg:px-8 shadow-2dp rounded-lg bg-background">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                inputName={"Enter your username"}
                inputType={"text"}
                register={register}
                errors={errors}
                validationName={"username"}
                isRequired={true}
              />
              <CustomInput
                inputName={"Enter your email"}
                inputType={"email"}
                register={register}
                errors={errors}
                validationName={"email"}
                isRequired={true}
              />
              <CustomInput
                inputName={"Enter your password"}
                inputType={"password"}
                register={register}
                errors={errors}
                validationName={"password"}
                isRequired={true}
              />
              <CustomInput
                inputName={"Confirm your password"}
                inputType={"password"}
                register={register}
                errors={errors}
                validationName={"confirmPassword"}
                isRequired={true}
              />
              <button type="submit" className="lg:w-[25vw] md:w-[50vw] w-[70vw] bg-accent text-background py-3 rounded-lg duration-300 ease-in hover:bg-primary font-montserrat">
                Confirm
              </button>
            </form>
            <h2 className="text-center mt-12 mb-6 text-font lg:text-label md:text-tablet-label text-mobile-label font-open_sans">
              Or sign up with
            </h2>
            <button className="border border-secondary py-2 rounded-lg flex flex-row items-center justify-center space-x-8 hover:bg-slate-200 duration-300">
              <img src={google} />
              <p className="font-open_sans text-font">Your Google account</p>
            </button>
            <p className="lg:text-label md:text-tablet-label text-mobile-label text-center text-secondary mt-4">
              Already have an account?{" "}
              <span className="text-accent cursor-pointer" onClick={signedUp}>
                Click here
              </span>{" "}
              to sign in{" "}
            </p>
          </div>
        </div>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default SignUp;
