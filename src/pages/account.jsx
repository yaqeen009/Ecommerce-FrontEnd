import { useDispatch, useSelector } from "react-redux";
import DetailHeaders from "../components/accountHeaders";
import AccountInput from "../components/accountInput";
import OrderDetails from "../components/accountOrders";
import ButtonComp from "../components/button";
import { logout, updateAccount, updateBilling, updateShipping } from "../states/authSlice";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Account = () => {
  //states & hooks
  const [userDetailsUpdater, setUserDetailsUpdater] = useState(false);
  const [shippingUpdater, setShippingUpdater] = useState(false);
  const [billingUpdater, setBillingUpdater] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //functionalities
  const handleUpdate = (userDetails) => {
    dispatch(updateAccount(userDetails));
    toast("Account details updated successfully!");
    setTimeout(() => {
      navigate("/account");
    }, 3000);
  };
  
  const handleShippingUpdate = (shippingDetails) => {
    dispatch(updateShipping(shippingDetails))
    toast("Shipping details updated successfully!");
    setTimeout(() => {
      navigate("/account");
    }, 3000);
  }

  const handleBillingUpdate = (billingDetails) => {
    dispatch(updateBilling(billingDetails))
    toast("Billing details updated successfully!");
    setTimeout(() => {
      navigate("/account");
    }, 3000);
  }

  const handleUserEdit = () => {
    setUserDetailsUpdater((prev) => !prev);
  };

  const handleLogOut = () => {
    dispatch(logout())
    navigate("/")
  }
  //objects
  //utils
  return (
    isAuthenticated && (
      <div className="account-page relative">
        <div className="flex flex-row justify-between mx-4 lg:mx-8 mt-8 mb-4">
            <h1 className="font-montserrat text-font text-mobile-headline md:text-tablet-headline lg:text-headlind">Your Account</h1>
            <ButtonComp btnFunction={handleLogOut} btnName={"Log out"} btnColor={"bg-danger-100 hover:bg-danger-300"} btnTextColor={"text-danger-500"}/>
        </div>
        <div className="mb-4 flex flex-col">
          <DetailHeaders
            name={"Account Details"}
            showEdit={true}
            handleClick={handleUserEdit}
          />
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className={`px-4 lg:px-8 grid grid-cols-2 sm:grid-cols-1 w-full gap-x-12 gap-y-2 mt-4}`}
          >
            <AccountInput
              type={"text"}
              placeholder={user?.username || "Username"}
              {...register("username")}
              disabled={!userDetailsUpdater}
            />
            <AccountInput
              type={"text"}
              placeholder={user?.fullname || "Full Name"}
              {...register("fullname")}
              disabled={!userDetailsUpdater}
            />
            <AccountInput
              type={"text"}
              placeholder={user?.contact || "Contact"}
              {...register("contact")}
              disabled={!userDetailsUpdater}
            />
            <AccountInput
              type={"email"}
              placeholder={user?.email || "Email"}
              {...register("email")}
              disabled={!userDetailsUpdater}
            />
            <span className="my-4">
              <ButtonComp
                btnName={"Confirm Changes"}
                btnBorder={"border border-accent"}
                btnTextColor={"text-accent hover:text-background "}
                btnHover={"hover:bg-accent"}
                btnType={"submit"}
                btnDisabled={!userDetailsUpdater}
              />
            </span>
          </form>
          <ToastContainer />
        </div>
        <div className="mb-4 flex flex-col">
          <DetailHeaders name={"Billing Details"} showEdit={true} handleClick={() =>setBillingUpdater((prev) => !prev)}/>
          <form
            onSubmit={handleSubmit(handleBillingUpdate)}
            className="px-4 lg:px-8 grid grid-cols-2 sm:grid-cols-1 w-full gap-x-12 gap-y-2 mt-4 "
          >
            <AccountInput type={"text"} placeholder={user?.billing?.firstName} disabled={!billingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.billing?.lastName} disabled={!billingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.billing?.address} disabled={!billingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.billing?.contact} disabled={!billingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.billing?.city} disabled={!billingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.billing?.apartment} disabled={!billingUpdater}/>
            <span className="my-4">
              <ButtonComp
                btnName={"Confirm Changes"}
                btnBorder={"border border-accent"}
                btnTextColor={"text-accent hover:text-background "}
                btnHover={"hover:bg-accent"}
                btnDisabled={!billingUpdater}
              />
            </span>
          </form>
        </div>
        <div className="mb-4 flex flex-col">
          <DetailHeaders name={"Shipping Details"} showEdit={true} handleClick={() => setShippingUpdater((prev) => !prev)}/>
          <form
            onSubmit={handleSubmit(handleShippingUpdate)}
            className="px-4 lg:px-8 grid grid-cols-2 sm:grid-cols-1 w-full gap-x-12 gap-y-2 mt-4 "
          >
            <AccountInput type={"text"} placeholder={user?.shipping?.firstName} disabled={!shippingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.shipping?.lastName} disabled={!shippingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.shipping?.address} disabled={!shippingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.shipping?.contact} disabled={!shippingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.shipping?.city} disabled={!shippingUpdater}/>
            <AccountInput type={"text"} placeholder={user?.shipping?.apartment} disabled={!shippingUpdater}/>
            <span className="my-4">
              <ButtonComp
                btnName={"Confirm Changes"}
                btnBorder={"border border-accent"}
                btnTextColor={"text-accent hover:text-background "}
                btnHover={"hover:bg-accent"}
                btnDisabled={!shippingUpdater}
              />
            </span>
          </form>
        </div>
        <div className="mb-4 flex flex-col">
          <DetailHeaders name={"Order History"} showEdit={false} />
          <div className="pt-5 grid grid-cols-5 sm:grid-cols-4 sm:gap-1  bg-[#F0F5FD20] text-center">
            <p className="sm:hidden font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">
              Order ID
            </p>
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">
              Date Ordered
            </p>
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">
              Total Amount
            </p>
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">
              Order Status
            </p>
          </div>
          <div className="flex flex-col overflow-y-scroll h-[40vh]">
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
            <OrderDetails />
          </div>
        </div>
      </div>
    )
  );
};

export default Account;
