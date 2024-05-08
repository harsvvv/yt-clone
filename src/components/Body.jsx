/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from "./Sidebar";
// import Sidebar from './components/Sidebar'
import Feed from "./Feed";
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    // <div>Body</div>
    <div className="flex mt-16">
        <Sidebar />
        <Outlet/>
      </div>
  )
}

export default Body