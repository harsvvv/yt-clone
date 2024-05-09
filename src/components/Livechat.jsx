/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Chatmessage from './Chatmessage'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMessage } from '../utils/chatslice';
import { generateRandomMessage } from '../utils/helper';
import { generateRandomName } from '../utils/helper';

const Livechat = () => {
    const message=useSelector((store)=>store.chat.message);
    const dispatch=useDispatch();
    useEffect(()=>{
      const timer=  setInterval(() => {
            dispatch(setMessage({
                name:generateRandomName(),
                message:generateRandomMessage(10),
            }))
        }, 1000);
        return (()=>{
            clearInterval(timer);
        })
    },[])
  return (
    <div className='px-4 py-1'>
    {
        message.map((item,index)=>{
            return (
                
                <Chatmessage key={index} item={item}/>
                
                
            )
        })
    }
    
    
        
        
    </div>
  )
}

export default Livechat