/* eslint-disable no-unused-vars */

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Sidebar from './components/Sidebar'
import Feed from "./components/Feed";
import Videocart from "./components/Videocart";
import {createBrowserRouter} from 'react-router-dom'
const appRouter=createBrowserRouter
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex mt-16">
        <Sidebar />
        <Feed />
      </div>
      {/* <Videocart/> */}
    </div>
  );
}

export default App;
