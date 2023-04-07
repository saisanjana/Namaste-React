import React from "react";

const Loader = () => {
    return (
    <div className="appBody">
        {
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item, index)=>{
                return <div className="loaderCard" key={index}>
                </div>
            })
        }
    </div>
    );
}

export default Loader;