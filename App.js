import React,{Suspense, lazy, useState} from "react";
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
import UserContext from "./Contexts/UserContext";
import RestoContext from "./Contexts/RestoContext";
import store from "./Redux/store";
import {Provider} from "react-redux";
import Cart from "./Components/Cart";



const App = () => {
    const [user, setUser] = useState({});
    return (
        <Provider store={store}>
        <div className="appLayout">
            <UserContext.Provider value={{user:user, setUser:setUser }}>
                <RestoContext.Provider value={{dummy:"dummy"}}>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </RestoContext.Provider>
            </UserContext.Provider>
        </div>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)
