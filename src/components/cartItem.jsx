import testImage from "../assets/cardImages/domgloves.png";
import checked from "../assets/stockCheck.svg";
import del from "../assets/cancel.svg";
import edit from "../assets/edit.svg";

const CartItem = ({ name, color, size, price, inStock }) => {
  return (
    <div className="cart-item border-t-[1px] py-6 flex flex-row space-x-4 w-1/2 sm:w-full justify-between">
      <div className="basis-4/5 flex flex-row space-x-4">
        <div className="basis-1/2">
          <img src={testImage} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col basis-1/2 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between align-middle -mt-1">
              <p className="font-montserrat text-mobile-title md:text-tablet-title lg:text-title text-font ">
                Dom Gloves
              </p>
              <span className="w-16 h-10 border border-font rounded-lg hidden lg:flex items-center pl-2">
                <input
                  type="number"
                  className="text-mobile-label md:text-tablet-label lg:text-label text-font text-center w-full  rounded-lg outline-none"
                />
              </span>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="text-secondary text-mobile-body md:text-tablet-body lg:text-body font-roboto_slab flex flex-row space-x-4">
                <p>Black</p>
                <p>|</p>
                <p>40</p>
              </div>
              <span className="w-16 h-10 sm:w-12 sm:h-8 border rounded-lg lg:hidden flex items-center pl-2">
                <input
                  type="number"
                  className="text-mobile-label md:text-tablet-label lg:text-label text-center w-full  rounded-lg outline-none"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <p className="text-mobile-label md:text-tablet-label lg:text-label text-accent font-open_sans">
              In stock
            </p>
            <img src={checked} alt="" className="sm:w-3 sm:h-3"/>
          </div>
        </div>
      </div>
      <div className="basis-1/10 flex flex-col justify-between right-0">
        <img src={del} alt="" className="w-4 h-4 sm:w-3 sm:h-3" />
        <img src={edit} alt="" className="w-4 h-4 sm:w-3 sm:h-3" />
      </div>
    </div>
  );
};

export default CartItem;
