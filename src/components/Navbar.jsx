/* eslint-disable no-unused-vars */
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appslice";

const Navbar = () => {
  const dispacth=useDispatch();
  const toggleHandler=()=>{
  dispacth(toggleSidebar());
  }
  
  return (
    
        <div className=" fixed top-0 flex justify-center items-center w-[100%] bg-white">
         <div className="flex w-[96%] py-3 justify-between items-center ">
      <div className="flex items-center">
        <RxHamburgerMenu  onClick={toggleHandler}   size={"24px"} className="cursor-pointer"/>
        <img className="w-[115px] h-[40px] cursor-pointer"src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="yt logo"/>
      </div>
      <div className="flex items-center w-[40%] ">
      <div  className=" rounded-l-full w-[100%] py-2 px-4 border  border-gray-500 "><input placeholder="Search..."  className="w-full outline-none " type="text" /></div>
      <button className="p-2 w-20 rounded-r-full border border-gray-400"><CiSearch size={"25px"}/></button>
        
      </div>
      <div className="flex items-center ">
      <CiVideoOn className="mx-2 cursor-pointer"  size={"20px"}/>
      <IoIosNotificationsOutline className="mx-2 cursor-pointer" size={"24px"}/>
      <Avatar className="mx-2 cursor-pointer" src="data:image/jpeg;base64,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" size={30} round={true} />
      </div>
    </div>
    </div>
   
    
    
   
  );
};
export default Navbar;
