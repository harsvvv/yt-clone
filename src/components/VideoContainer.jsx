/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { YOUTUBE_API,API_KEY } from '../constant/youtube'
import Videocart from './Videocart'

const VideoContainer = () => {
  const [video,setVideo]=useState([]);
  const fetchvideo=async()=>{
    try {
      const res=await axios.get(YOUTUBE_API);
    console.log(res?.data?.items);
    setVideo(res?.data?.items);
    } catch (error) {
      console.log("error happend",error);
    }
    
  }
  useEffect(()=>{
  fetchvideo();
  },[])
  return (
    <div className='grid grid-cols-3 gap-3 my-2'>
      {
        video.map((item)=>{
          return (
            
            <Videocart key={item.id} item={item}/>
           
            
          )
        })
      }
      
      
    </div>
  )
}

export default VideoContainer