/* eslint-disable no-unused-vars */
import React from 'react'

const buttonlist=["All","javascript","java","Live","Music","Songs","Vlogs","Trending","programming"];
const ButtonList = () => {
  return (
    <div className='flex py-3'>
    {
      buttonlist.map((item,index)=>{
        return (
          <div key={index}>
          <button className='bg-gray-300 mx-2 font-medium px-4 py-1 rounded-lg'>{item}</button>
          </div>
        )
      })
    }
  
      
    </div>
  )
}

export default ButtonList