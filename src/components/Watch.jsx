/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Livechat from "./Livechat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatslice";
const Watch = () => {
  const [text,setText]=useState('');
  const [detail, setDetail] = useState(null);
  const [useParams] = useSearchParams();
  const videoId = useParams.get("v");
  const dispatch=useDispatch();
 

  const sendmessage=()=>{
    dispatch(setMessage({
      name:"harshit",
        message:text,
    }
      ))
      setText("");
  }

  const getDetail = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );

      console.log(res);
      setDetail(res?.data?.items[0]);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  const open = useSelector((store) => store.app.open);
  return (
    <div className="flex  w-full overflow-x-hidden">
      <div className="flex w-[88%]">
      <div className="mt-2 ml-2  ">
        <iframe
          className="rounded-lg "
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold w-[70%]   mt-2 ml-1 text-lg">
          {detail?.snippet?.title}
        </h1>
        <div className=" flex justify-between items-center  w-[70%] ">
          <div className="flex items-center justify-between w-[40%]">
            <div className="flex justify-between items-center ">
              <Avatar
                className="mr-1  cursor-pointer"
                src="data:image/jpeg;base64,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"
                size={30}
                round={true}
              />
              <h1 className="ml-1  font-semibold">
                {detail?.snippet?.channelTitle}
              </h1>
            </div>
            <button className="px-4 py-2 font-medium  bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>

          <div className="flex w-[45%]  ">
            <div className="flex  justify-between items-center cursor-pointer py-1 px-3 mr-2 bg-gray-200 rounded-xl">
              <AiOutlineLike size={"20px"} className="mr-3 mt-1" />
              <AiOutlineDislike size={"20px"} className="" />
            </div>

            <div className="flex justify-between items-center bg-gray-200 py-1 px-2 mr-2  rounded-full">
              <FaShare size={"20px"} className="mr-3" />
              <p>Share</p>
            </div>
            <div className="flex justify-between items-center bg-gray-200 py-1 px-2 rounded-full">
              <IoMdDownload size={"20px"} className="mr-3" />
              <p>Download</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] border border-gray-300 ml-4 rounded-lg h-fit mt-2">
        <div className="flex justify-between items-center border border-gray-400 rounded-lg ">
        <h1>Top Chat</h1>
        <BsThreeDots/>
        </div>
        <div className="overflow-y-auto  h-[25rem] flex flex-col-reverse">
          <Livechat/>
        </div>
        <div className="flex items-center justify-between border-t ">
        <div className="flex m-1 justify-between items-center">
          <div>
          <Avatar
                className="mr-1  cursor-pointer"
                src="data:image/jpeg;base64,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"
                size={30}
                round={true}
              />
          </div>
          <input value={text} onChange={(event)=>setText(event.target.value)}  className="border-b outline-none ml-2 mr-2 border-gray-300" type="text " placeholder="send message"/>
          <div className="">
        <IoMdSend className="cursor-pointer" onClick={sendmessage} />
        </div>
        </div>
        

        </div>
      </div>
      </div>
    </div>
  );
};

export default Watch;
