//asset imports
import logo_img from "../assets/dom.png";
import team from "../assets/team.png";
import woman from "../assets/slider/girl.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="relative w-full lg:h-[60vh] h-[40vh] bg-primary text-background font-montserrat">
        <h1 className="text-center absolute transform right-1 left-1 top-[40%] text-mobile-headline md:text-tablet-display lg:text-display">
          What to Know About Us
        </h1>
      </div>
      <div className=" lg:w-full sm:mx-4 sm:my-8 sm:space-y-2 lg:ml-12 my-8 lg:my-20 mx-8 flex sm:flex-col flex-row items-center lg:space-x-8 md:space-x-8">
        <div className="text-font space-y-2 basis-1/2">
          <h2 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
            Who We Are
          </h2>
          <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.Norem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="md:h-[38vh]">
          <img className="w-full h-full" src={logo_img} />
        </div>
      </div>
      <div className=" lg:w-full sm:mx-4 sm:my-8 sm:space-y-2 lg:ml-12 my-8 lg:my-20 mx-8 flex sm:flex-col-reverse flex-row items-center lg:space-x-8 md:space-x-8">
        <div className="">
          <img className="lg:w-[40vw] lg:h-[50vh]" src={team} />
        </div>
        <div className="text-font space-y-2 basis-1/2">
          <h2 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
            What We Do
          </h2>
          <p className="text-justify font-open_sans text-mobile-body md:text-tablet-body lg:text-body">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
      <div className="w-full h-fit sm:space-y-2 lg:pl-12 flex sm:flex-col flex-row items-center md:space-x-4 lg:space-x-8 bg-primary">
        <div className="text-background space-y-2 basis-1/2 px-4 py-8">
          <h2 className="font-montserrat text-mobile-headline md:text-tablet-headline lg:text-headlind">
            Our Commitment
          </h2>
          <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img className="w-full md:h-[30vh] h-[40vh]" src={woman} />
        </div>
      </div>
    </div>
  );
};

export default About;
