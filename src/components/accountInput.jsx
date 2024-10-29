const AccountInput = ({type, placeholder}) => {
    return (  
        <div className="acc-input">
            <input type={type} placeholder={placeholder} className="outline-none pl-6 pt-4 pb-2 border-b-2 w-full font-open_sans text-font placeholder:text-font placeholder:font-open_sans"/>
        </div>
    );
}
 
export default AccountInput;