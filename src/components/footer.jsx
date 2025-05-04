import logo from "../assets/logoblack.png";
import ButtonComp from "./button";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";

const Footer = () => {
  return (
    <footer className="bg-[#020202] w-full lg:h-[50vh] md:h-[30vh] h-[60vh] flex flex-col">
      <div className="flex flex-col flex-grow lg:mx-20 md:mx-8">
        <div className="flex flex-row sm:flex-col-reverse sm:items-center justify-between">
          <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:mt-10 sm:space-x-[20vw] lg:space-y-[20%]">
            <div className="flex flex-row items-center md:-mx-6">
              <img src={logo} />
              <span className="flex sm:hidden sm:mr-10">
                <ButtonComp
                  btnTextSize={"lg:px-4"}
                  btnName={"Home"}
                  btnTextColor={"text-secondary hover:text-background"}
                  btnBorder={"border-r-[1px] border-secondary rounded-none"}
                />
                <ButtonComp
                  btnTextSize={"lg:px-4"}
                  btnName={"Shop"}
                  btnTextColor={"text-secondary hover:text-background"}
                  btnBorder={"border-r-[1px] border-secondary rounded-none"}
                />
                <ButtonComp
                  btnTextSize={"lg:px-4"}
                  btnName={"About Us"}
                  btnTextColor={"text-secondary hover:text-background"}
                  btnBorder={"border-r-[1px] border-secondary rounded-none"}
                />
                <ButtonComp
                  btnTextSize={"lg:px-4"}
                  btnName={"Contact"}
                  btnTextColor={"text-secondary hover:text-background"}
                />
              </span>
            </div>
            <div className="flex flex-col sm:items-end">
              <span className="flex flex-row space-x-2 ">
                <img src={twitter} className="w-6 h-6 cursor-pointer hover:opacity-85" />
                <img src={facebook} className="w-6 h-6 cursor-pointer hover:opacity-85" />
                <img src={insta} className="w-6 h-6 cursor-pointer hover:opacity-85" />
              </span>
              <p className="text-background mt-2 font-open_sans">
                dominiongh@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-6 md:mt-8 lg:-mx-0 -mx-2">
            <div className="flex flex-row lg:space-x-2 space-x-0">
              <ButtonComp
                btnTextColor={"text-background hover:text-accent"}
                btnName={"Terms & Conditions"}
              />
              <ButtonComp
                btnTextColor={"text-background hover:text-accent"}
                btnName={"Privacy Policy"}
              />
              <ButtonComp
                btnTextColor={"text-background hover:text-accent"}
                btnName={"Refund Policy"}
              />
            </div>
            <div className="flex flex-col ml-2">
              <h1 className="text-background text-mobile-title md:text-tablet-title lg:text-title font-open_sans mb-4">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-background text-mobile-body md:text-tablet-body lg:text-body font-open_sans">
                Get the latest updates on new products and <br /> upcoming sales
              </p>
              <span className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="lg:p-2 px-2 lg:pl-4 pr-20 -mr-2 z-20 rounded-l-lg outline-none"
                />
                <ButtonComp
                  btnName={"Subscribe"}
                  btnColor={"bg-accent text-background"}
                  btnTextSize={"px-2"}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-4 bg-[#111111] py-8">
        <p className="text-background text-center font-open_sans">
          © Football Store. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
