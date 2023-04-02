import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SecondaryHeader from "./Components/SecondaryHeader";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
/*
Header - icon location nav items
secondary header - no. of restaurants, filters
Body - restaurant cards
Footer- links, contact us
 */



const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div className="appLayout">
            <Header/>
            <SecondaryHeader/>
            <Body/>
            <Footer/>
        </div>
        );
}
root.render(<App/>)
