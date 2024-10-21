import checked from "../assets/stockCheck.svg";
import del from "../assets/cancel.svg";
import edit from "../assets/edit.svg";
import increase from "../assets/inc.svg";
import decrease from "../assets/dec.svg";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../states/cartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = ({ id, name, color, size, image, inStock, price, amount }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const product = { id, name, color, size, price, amount, image };

  const handleIncrement = () => {
    dispatch(addToCart(product));
  };
  const handleDecrement = () => {
    dispatch(removeFromCart(product));
  };
  const handleDelete = () => {
    dispatch(deleteFromCart(product))
  }
  const handleEdit = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div className="cart-item border-t-[1px] py-6 flex flex-row space-x-4 w-full justify-between h-[40hv]">
      <div className="basis-4/5 flex flex-row space-x-4">
        <div className="basis-1/2">
          <img src={image} alt="prod-img" className="object-cover rounded-xl w-full h-full" />
        </div>
        <div className="flex flex-col basis-1/2 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between align-middle -mt-1">
              <p className="font-montserrat text-mobile-title md:text-tablet-title lg:text-title text-font ">
                {name}
              </p>
              <span className="w-16 h-10 border border-secondary rounded-lg hidden lg:flex justify-center items-center space-x-4 pl-2">
                <p data-testid="amount-field-desktop" className="text-mobile-label md:text-tablet-label lg:text-label text-font text-center ">
                  {amount}
                </p>
                <span className="flex flex-col space-y-2">
                  <button onClick={() => handleIncrement(id)}>
                    <img src={increase} alt="" />
                  </button>
                  <button onClick={() => handleDecrement(id)}>
                    <img src={decrease} alt="" />
                  </button>
                </span>
              </span>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="text-secondary text-mobile-body md:text-tablet-body lg:text-body font-roboto_slab flex flex-row space-x-4">
                <p>${price}</p>
                <p>|</p>
                <span
                  data-testid = "color-field"
                  className={`w-8 h-full rounded-full`}
                  style={{ backgroundColor: color }}
                ></span>
                <p>|</p>
                <p>{size}</p>
              </div>
              <span className="w-16 h-10 border border-secondary rounded-lg flex lg:hidden  items-center space-x-3 pl-2">
                <button onClick={() => handleDecrement(id)}>
                  <img src={increase} alt="" className="-rotate-90" />
                </button>
                <p data-testid="amount-field" className="text-mobile-label md:text-tablet-label lg:text-label text-font text-center ">
                  {amount}
                </p>
                <button onClick={() => handleIncrement(id)}>
                  <img src={decrease} alt="" className="-rotate-90" />
                </button>
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <p className="text-mobile-label md:text-tablet-label lg:text-label text-accent font-open_sans">
              {inStock}
            </p>
            <img src={checked} alt="" className="sm:w-3 sm:h-3" />
          </div>
        </div>
      </div>
      <div className="basis-1/10 flex flex-col justify-between right-0">
        <button onClick={()=>handleDelete(id)}>
          <img src={del} alt="" className="w-4 h-4 sm:w-3 sm:h-3" />
        </button>
        <button onClick={()=>handleEdit(id)}>
          <img src={edit} alt="" className="w-4 h-4 sm:w-3 sm:h-3" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

