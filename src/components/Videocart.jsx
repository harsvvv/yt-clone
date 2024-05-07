/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Avatar from "react-avatar"
import axios from "axios"
import {API_KEY} from '../constant/youtube'

const Videocart = ({item}) => {
    const [icon,setIcon]=useState("")
    const getchannelname=async()=>{
  try {
   const res= await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
   console.log(res); 
   setIcon(res.data.items[0].snippet.thumbnails.default.url);
} catch (error) {
    console.log(error);
  }
    }
    useEffect(()=>{
   getchannelname()
    },[])
  return (
    <div className="w-94 cursor-pointer">
    <img className=" rounded-xl w-full" src={item.snippet.thumbnails.high.url}/>
        <div>
            <div className="flex mt-2">
<Avatar className="mx-2  cursor-pointer w-min-[20%]" src={`${icon}`} size={30} round={true} />
          <div className="ml-2">
          <h1 className="font-bold">{item.snippet.title} </h1>
           <p className="text-sm text-gray-700">{item.snippet.channelTitle}</p>
          </div>
            </div>
            
        </div>
    </div>
  )
}

export default Videocart