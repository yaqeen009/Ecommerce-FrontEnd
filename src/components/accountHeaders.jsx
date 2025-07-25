/* eslint-disable react/prop-types */
import edit from '../assets/edit.svg'
import ButtonComp from './button';
/*
component for custom headers in account page, with header props (header name and edit btn)
*/
const DetailHeaders = ({name, showEdit, handleClick}) => {
    return ( 
        <div className="detail-headers">
            <div className="w-full h-fit py-2 bg-success-500 flex justify-between px-4 lg:px-8 ">
                <h2 className="font-montserrat text-primary  text-mobile-title md:text-tablet-title lg:text-title">
                    {name}
                </h2>
               {showEdit && <ButtonComp btnName={"Edit"} btnIcon={edit} btnBorder={'space-x-2'} btnTextColor={'text-font'} btnFunction={handleClick} btnIconSize={'w-3'}/>}
            </div>
        </div>
     );
}
 
export default DetailHeaders;