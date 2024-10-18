const CartSummary = ({subtotal, delivery, tax, promo, orderTotal}) => {
    return ( 
        <div className="cart-summary p-8 w-full bg-white rounded-xl">
            <div className="flex flex-col">
                <h3 className="text-mobile-title md:text-tablet-headline lg:text-title text-font font-montserrat">Order Summary</h3>
                <span className="flex flex-row justify-between border-b-[1px] pt-4">
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-secondary font-open_sans">Subtotal</p>
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-font font-open_sans">${subtotal}</p>
                </span>
                <span className="flex flex-row justify-between border-b-[1px] pt-4">
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-secondary font-open_sans">Delivery</p>
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-font font-open_sans">${delivery}</p>
                </span>
                <span className="flex flex-row justify-between border-b-[1px] pt-4">
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-secondary font-open_sans">Tax</p>
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-font font-open_sans">${tax}</p>
                </span>
                <span className="flex flex-row justify-between border-b-[1px] pt-4">
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-secondary font-open_sans">Promo</p>
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-font font-open_sans">-${promo}</p>
                </span>
                <span className="flex flex-row justify-between border-b-[1px] pt-4">
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-font font-open_sans">Order Total</p>
                    <p className="text-mobile-body md:text-tablet-body lg:text-body text-font font-open_sans">${orderTotal}</p>
                </span>
            </div>
        </div>
     );
}
 
export default CartSummary;