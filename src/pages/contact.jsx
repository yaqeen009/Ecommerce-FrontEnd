import mail from "../assets/email.svg";
import fb from "../assets/facebook-black.svg";
import x from "../assets/twitter-black.svg";
import phone from "../assets/phone.svg";
import insta from "../assets/insta-black.svg";
import loc from "../assets/loc.svg";
import ButtonComp from "../components/button";
import CustomInput from "../components/customInputField";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="contact">
      <div className="relative w-full lg:h-[60vh] h-[40vh] bg-primary text-background font-montserrat">
        <div className="absolute right-1 left-1 top-[30%] md:px-6 sm:px-4">
          <h1 className="font-montserrat text-center  text-mobile-headline md:text-tablet-display lg:text-display">
            What to Know About Us
          </h1>
          <p className="text-center text-mobile-body md:text-tablet-body lg:text-body font-open_sans">
            Have questions about our products, your order, or need assistance?
            We&apos;re here to help! Feel free to reach out to us using any of
            the methods below.
          </p>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col mx-4 lg:mx-12 md:mx-8 my-4 space-y-4 lg:space-y-0 lg:my-8 lg:basis-1/2">
        <div className="flex flex-col space-y-4 lg:space-y-8">
          <div className="flex flex-col text-font space-y-4">
            <h2 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
              You can also reach us through...
            </h2>
            <div className="flex sm:flex-col sm:space-x-0 sm:space-y-2 space-x-4">
              <span className="flex space-x-2">
                <img src={mail} alt="" />
                <p className="text-mobile-body md:text-tablet-body lg:text-body">
                  dominiongh@gmail.com
                </p>
              </span>
              <span className="flex space-x-2">
                <img src={phone} alt="" />
                <p className="text-mobile-body md:text-tablet-body lg:text-body">
                  +233 555 555 555
                </p>
              </span>
            </div>
            <span className="flex space-x-2">
              <img className="cursor-pointer hover:opacity-85 sm:w-5" src={x} />
              <img
                className="cursor-pointer hover:opacity-85 sm:w-5"
                src={fb}
              />
              <img
                className="cursor-pointer hover:opacity-85 sm:w-5"
                src={insta}
              />
            </span>
          </div>
          <div className="flex flex-col text-font space-y-4">
            <h2 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
              Or Visit Our Store
            </h2>
            <span className="flex space-x-2">
              <img src={loc} alt="" />
              <p className="text-mobile-body md:text-tablet-body lg:text-body">
                East Legon, Accra, Ghana
              </p>
            </span>
            <div className="mt-4">
              <h4 className="font-montserrat text-mobile-title md:text-tablet-title lg:text-title italic">
                Our business hours
              </h4>
              <p className="bold font-roboto_slab text-mobile-body md:text-tablet-body lg:text-body">
                Monday - Friday: 9 AM - 5 PM <br /> Saturday: 10 AM - 4 PM{" "}
                <br /> Sunday: Closed
              </p>
            </div>
          </div>
          <div className="flex flex-col text-font space-y-4">
            <h2 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
              Check out our FAQs
            </h2>
            <p className="text-mobile-body md:text-tablet-body lg:text-body">
              Browse our Frequently Asked Questions for quick answers and
              helpful information.
            </p>
            <ButtonComp
              btnName={"Go to FAQs"}
              btnBorder={"border border-accent hover:bg-accent"}
              btnTextColor={"text-accent hover:text-background"}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col lg:w-1/2">
          <span className="w-[90%]">
            <CustomInput
              isRequired={false}
              inputName={"Enter Your Name"}
              inputType={"text"}
              register={register}
              errors={errors}
              validationName={"name"}
              checkout={true}
            />
          </span>
          <span className="w-[90%]">
            <CustomInput
              isRequired={false}
              inputName={"Enter Your Email"}
              inputType={"email"}
              register={register}
              errors={errors}
              validationName={"name"}
              checkout={true}
            />
          </span>
          <span className="w-[90%] ">
            <CustomInput
              isRequired={false}
              inputName={"Enter Your Message"}
              inputType={"text"}
              register={register}
              errors={errors}
              validationName={"name"}
              checkout={true}
              sentence={"h-[40vh]"}
            />
          </span>
          <ButtonComp
            btnName={"Submit Message"}
            btnColor={
              "bg-accent hover:bg-background border hover:border-accent"
            }
            btnTextColor={"text-background hover:text-accent"}
            btnWidth={"w-[90%] md:px-[38%] px-[35%] sm:px-[30%]"}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
