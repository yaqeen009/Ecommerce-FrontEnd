/*
 component for product category card with props (category name, image and click event to go to said category)
*/


/* eslint-disable react/prop-types */


const Category = ({name, image, gotoCategory}) => {
    return ( 
        <div onClick={gotoCategory} className="category-card flex flex-col flex-grow w-fit sm:w-full lg:h-[45vh] rounded-sm border-[0.5px] border-secondary hover:shadow-2dp duration-300 ease-in-out">
            <img src={image} className="w-[100%] object-contain"/>
            <p className="text-font text-center text-mobile-title md:text-tablet-body lg:text-body  font-montserrat">{name}</p>
        </div>
     );
}
 
export default Category;