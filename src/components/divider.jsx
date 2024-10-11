const Divider = ({name}) => {
    return ( 
        <div className="divider flex flex-row flex-grow items-center space-x-4 justify-center lg:mx-4 lg:my-12 my-6">
            <span className="line w-full lg:mx-12 md:mx-8 mx-4 h-[1px] bg-secondary"></span>
            <h2 className="font-montserrat lg:text-headlind md:text-tablet-headline text-mobile-title text-font absolute z-30 bg-background px-2">{name}</h2>
        </div>
     );
}
 
export default Divider;