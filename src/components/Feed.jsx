/* eslint-disable no-unused-vars */
import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const Feed = () => {
  const open=useSelector((store)=>store.app.open);
  return (
    <div className={`ml-5 mr-5 `}>
       <ButtonList/>
       <VideoContainer/>
    </div>
  )
}

export default Feed