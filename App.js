import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const About = lazy(()=>import("./Components/About"));
import Contact from "./Components/Contact";
import RestaurantDetails from "./Components/RestaurantDetails";
import RouteError from "./Components/RouteError";
import SignIn from "./Components/SignIn";
import Loader from "./Components/Loader";





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
                element: <Suspense fallback={<Loader/>} ><About/></Suspense>
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
