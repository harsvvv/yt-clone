/* eslint-disable no-unused-vars */

import "./App.css";
import Navbar from "./components/Navbar";

// import Sidebar from './components/Sidebar'
import Feed from "./components/Feed";
import Videocart from "./components/Videocart";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Body from "./components/Body";
import Watch from "./components/Watch";
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"/",
      element:<Feed/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  }
])
function App() {
  return (
    <div className="">
      <Navbar />
      {/* <div className="flex mt-16">
        <Sidebar />
        <Feed />
      </div> */}
      {/* <Videocart/> */}
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
