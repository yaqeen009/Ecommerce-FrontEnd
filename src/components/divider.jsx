const Divider = ({name}) => {
    return ( 
        <div className="divider flex flex-row flex-grow items-center space-x-4 justify-center mx-4 mt-12">
            <span className="line lg:w-80 md:w-40 w-20 h-[1px] bg-font"></span>
            <h2 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-title text-font">{name}</h2>
            <span className="line lg:w-80 md:w-40 w-20 h-[1px] bg-font"></span>
        </div>
     );
}
 
export default Divider;