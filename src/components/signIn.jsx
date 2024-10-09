import CustomInput from "./customInputField";
import google from "../assets/google.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignIn = ({ signedIn, isopen }) => {
  //form schema
  // const schema = yup.object().shape({
  //   username: yup
  //     .string()
  //     .required("Username is required")
  //     .min(4, "Must be at least 4 characters"),
  //   email: yup
  //     .string()
  //     .required("Email is required")
  //     .email("Must be a valid email"),
  //   password: yup
  //     .string()
  //     .required("Password is required")
  //     .min(8, "Password must be at least 6 characters"),
  // });
    // Initialize the form with react-hook-form and yup schema resolver
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      // resolver: yupResolver(schema), //yup for validation
    });

    // Handle form submission
    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <div className="sign-in flex justify-center mt-8 bg-background">
        {isopen && (
          <div className="flex flex-col my-[10vh]">
            <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline">
              Sign In
            </h1>
            <div className="w-fit h-fit flex flex-col lg:py-16 md:py-12 py-8 px-4 md:px-6 lg:px-8 shadow-2dp rounded-lg bg-background">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                  inputName={"Enter Username or Email"}
                  inputType={"text"}
                  register={register}
                  errors={errors}
                  validationName={"username or email"}
                  isRequired={true}
                />
                <CustomInput
                  inputName={"Enter Password"}
                  inputType={"password"}
                  register={register}
                  errors={errors}
                  validationName={"password"}
                  isRequired={true}
                />
                <button className="lg:w-[25vw] md:w-[50vw] w-[70vw] bg-accent text-background py-3 rounded-lg duration-300 ease-in hover:bg-primary font-montserrat">
                  Confirm
                </button>
              </form>
              <h2 className="text-center mt-12 mb-6 text-font lg:text-label md:text-tablet-label text-mobile-label font-open_sans">
                Or sign in with{" "}
              </h2>
              <button className="border border-secondary py-2 rounded-lg flex flex-row items-center justify-center space-x-8 hover:bg-slate-200 duration-300">
                <img src={google} />
                <p className="font-open_sans text-font">Your Google account</p>
              </button>
              <p className="lg:text-label md:text-tablet-label text-mobile-label text-center text-secondary mt-4">
                Don't have an account?{" "}
                <span onClick={signedIn} className="text-accent cursor-pointer">
                  Click here
                </span>{" "}
                to sign up{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    );
};

export default SignIn;
