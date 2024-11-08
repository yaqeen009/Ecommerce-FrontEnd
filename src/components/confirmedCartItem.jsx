import checked from "../assets/stockCheck.svg";
import del from "../assets/cancel.svg";
import edit from "../assets/edit.svg";
import increase from "../assets/inc.svg";
import decrease from "../assets/dec.svg";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../states/cartSlice";
import { useNavigate } from "react-router-dom";
import CancelBtn from "../assets/cancel";

const ConfirmedCart = ({ id, name, color, size, image, price, amount }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const product = { id, name, color, size, price, amount, image };

  return (
    <div className="cart-item border-t-[1px] py-6 flex flex-row space-x-4 w-full justify-between h-[40hv]">
      <div className={`flex flex-row space-x-4 basis-[90%]`}>
        <div className={`basis-[45%]`}>
          <img
            src={image}
            alt="prod-img"
            className="object-cover rounded-xl w-64 h-64"
          />
        </div>
        <div className="flex flex-col basis-1/2 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between align-middle -mt-1">
              <p
                className={`font-montserrat text-mobile-title md:text-tablet-title lg:text-title 
                  "text-font"
                `}
              >
                {name}
              </p>
              <p className="text-font text-mobile-body md:text-tablet-body lg:text-body font-roboto_slab">x{amount}</p>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="text-secondary text-mobile-body md:text-tablet-body lg:text-body font-roboto_slab flex flex-row space-x-6">
                <span
                  data-testid="color-field"
                  className={`w-8 h-full rounded-full`}
                  style={{ backgroundColor: color }}
                ></span>
                <p>|</p>
                <p>{size}</p>
              </div>
              <p className="text-font text-mobile-body md:text-tablet-body lg:text-body font-roboto_slab">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedCart;
