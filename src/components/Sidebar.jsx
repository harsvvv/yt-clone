/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const sidebarItems = [
  {
    icons: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  // Add more items as needed
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div className={`ml-6 bg-white left-0 ${open ? 'min-w-[20%]' : 'min-w-[9%]'} h-[calc(100vh-4.635rem)] overflow-y-scroll overflow-x-hidden hidden sm:block`}>
      {sidebarItems.map((item, index) => (
        <div key={index} className="flex my-3 mx-5">
          {item.icons}
          <p className={`mx-3 animate-fadeIn ${open ? "" : 'hidden'}`}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
