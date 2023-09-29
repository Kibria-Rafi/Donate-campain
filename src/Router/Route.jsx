import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonateItem from "../Pages/DonateItem/Donetion";


const myCreateRoute = createBrowserRouter([
    {
       path: "/",
       element:<MainLayOut></MainLayOut>,
       children: [
        {
            path: "/",
            element:<Home></Home>,
            loader: ()=> fetch('/data.json')
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element:<Statistics></Statistics>
        },
        {
            path: '/donateItem/:id',
            element:<DonateItem></DonateItem>,
            loader: ()=> fetch('/data.json')
        }
       ]
}
])

export default myCreateRoute;