import CustomInput from "./customInputField";
import google from "../assets/google.svg";

const SignUp = ({ signedUp, isOpen }) => {
  return (
    <div className="sign-up flex justify-center mt-8 bg-background">
      {isOpen && (
        <div className="flex flex-col">
          <h1 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-headline">
            Sign Up
          </h1>
          <div className="w-fit h-fit flex flex-col lg:py-16 md:py-12 py-8 px-4 md:px-6 lg:px-8 shadow-2dp rounded-lg bg-background">
            <form className="space-y-6">
              <CustomInput
                inputName={"Enter your username"}
                inputType={"text"}
              />
              <CustomInput inputName={"Enter your email"} inputType={"email"} />
              <CustomInput
                inputName={"Enter your password"}
                inputType={"password"}
              />
              <CustomInput
                inputName={"Confirm your password"}
                inputType={"password"}
              />
              <button className="lg:w-[25vw] md:w-[50vw] w-[70vw] bg-accent text-background py-3 rounded-lg duration-300 ease-in hover:bg-primary font-montserrat">
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
    </div>
  );
};

export default SignUp;
