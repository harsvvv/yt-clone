/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appslice';

const buttonlist=["All","javascript","java","Live","Music","Songs","Vlogs","Trending","programming","News","Cricket","Comedy"];
const ButtonList = () => {
  const dispatch=useDispatch()
  const [active,setActive]=useState("All");
  const videoByTag=(tag)=>{
    if(active!==tag){
      dispatch(setCategory(tag));
      setActive(tag);
    }
    
  }
  return (
    <div className='flex py-3 w-full overflow-x-scroll no-scrollbar'>
    {
      buttonlist.map((item,index)=>{
        return (
          <div key={index}>
          <button onClick={()=>{videoByTag(item)}} className={`${active===item?"bg-slate-900 text-white":"bg-gray-200 text-black"} bg-gray-300 mx-2 font-medium px-4 py-1 rounded-lg`}>{item}</button>
          </div>
        )
      })
    }
  
      
    </div>
  )
}

export default ButtonList