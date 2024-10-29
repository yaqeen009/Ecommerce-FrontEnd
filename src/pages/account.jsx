import DetailHeaders from "../components/accountHeaders";
import AccountInput from "../components/accountInput";
import OrderDetails from "../components/accountOrders";
import ButtonComp from "../components/button";

const Account = () => {
  return (
    <div className="account-page">
      <div className="mb-4 flex flex-col">
        <DetailHeaders name={"Account Details"} showEdit={true} />
        <form
          action=""
          className="px-4 lg:px-8 grid grid-cols-2 w-full gap-x-12 gap-y-2 mt-4 "
        >
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <span className="my-4">
            <ButtonComp
              btnName={"Confirm Changes"}
              btnBorder={"border border-accent"}
              btnTextColor={"text-accent hover:text-background "}
              btnHover={"hover:bg-accent"}
            />
          </span>
        </form>
      </div>
      <div className="mb-4 flex flex-col">
        <DetailHeaders name={"Billing Details"} showEdit={true} />
        <form
          action=""
          className="px-4 lg:px-8 grid grid-cols-2 w-full gap-x-12 gap-y-2 mt-4 "
        >
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <span className="my-4">
            <ButtonComp
              btnName={"Confirm Changes"}
              btnBorder={"border border-accent"}
              btnTextColor={"text-accent hover:text-background "}
              btnHover={"hover:bg-accent"}
            />
          </span>
        </form>
      </div>
      <div className="mb-4 flex flex-col">
        <DetailHeaders name={"Shipping Details"} showEdit={true} />
        <form
          action=""
          className="px-4 lg:px-8 grid grid-cols-2 w-full gap-x-12 gap-y-2 mt-4 "
        >
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <AccountInput type={"text"} placeholder={"John Doe"} />
          <span className="my-4">
            <ButtonComp
              btnName={"Confirm Changes"}
              btnBorder={"border border-accent"}
              btnTextColor={"text-accent hover:text-background "}
              btnHover={"hover:bg-accent"}
            />
          </span>
        </form>
      </div>
      <div className="mb-4 flex flex-col">
        <DetailHeaders name={"Order History"} showEdit={false} />
        <div className="pt-5 grid grid-cols-5  bg-[#F0F5FD20] text-center">
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">Order ID</p>
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">Date Ordered</p>
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">Total Amount</p>
            <p className="font-open_sans text-secondary text-mobile-body md:text-tablet-body lg:text-body">Order Status</p>
        </div>
        <div className="flex flex-col overflow-y-scroll h-[40vh]">
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
            <OrderDetails/>
        </div>
      </div>
    </div>
  );
};

export default Account;
