import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router";
import Details from "../components/Details";
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
      }
      
        ]
  },

]);


  


export default router