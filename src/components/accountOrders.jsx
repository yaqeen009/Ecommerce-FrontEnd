/*
component for list of order histories in account page
*/

//recieves api endpoint for order history

import ButtonComp from "./button";

const OrderDetails = () => {
    return ( 
        <div className="account-orders mt-4 border-b border-font grid grid-cols-5 sm:grid-cols-4 text-center mx-4 lg:mx-8">
            <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body text-font">Sep 28, 2024</p>
            <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body text-font">$320.00</p>
            <p className="font-open_sans text-mobile-body md:text-tablet-body lg:text-body text-font">Pending</p>
            <span className="ml-[30%]"><ButtonComp btnTextColor={"text-accent"} btnName={"View details"}/></span>
        </div>
     );
}
 
export default OrderDetails;