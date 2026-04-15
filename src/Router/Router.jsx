import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router";
import Details from "../components/Details";
import TimeLine from "../components/TimeLineCard"
import TimePage from "../pages/TimePage";
import Error from "../Error";
import Stat from "../components/Stat";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true,
       Component: HomePage },
      {
        path:"/friendsDetails/:id",
        loader: async() => {
          const res = await fetch(`/friends.json`);
          return res.json()},
        Component:Details,
      },{
        path:"/timeline",
        Component:TimePage
      },{
        path:"/stats",
        Component:Stat
      }
      
        ],
        errorElement:<Error/>
  },

]);


  


export default router