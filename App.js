import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantDetails from "./Components/RestaurantDetails";
import RouteError from "./Components/RouteError";
import SignIn from "./Components/SignIn";
/*
Header - icon location nav items
secondary header - no. of restaurants, filters
Body - restaurant cards
Footer- links, contact us
 */




const App = () => {
    return (
        <div className="appLayout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        );
}

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        errorElement:<RouteError/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails/>
            },
            {
                path: "/signin",
                element: <SignIn/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)
