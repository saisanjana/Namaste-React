import React from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { imageUrl } from "../config";
import useRestaurant from "../Hooks/useRestaurant";

const RestaurantDetails = () => {
    const [details, menu] = useRestaurant();
    
    return (!details || !menu ? <Loader/> : 
        <div className="px-44 my-8">
            <div className="restaurantDetailsHeader">
                <h1>{details.name}</h1>
                <h2>{details.avgRating} Stars</h2>
            </div>
            <h2>{details.cusines}</h2>
            <h3>{details.city},{details.areaName}</h3>
            <h3>{details.costForTwoMessage}</h3>
            <hr/>
            {
                menu.map((item)=>{
                    return <React.Fragment key={item.id}>
                    <div className="flex justify-between">
                        <h3 className="my-14">{item.name}</h3>
                        {item.imageId ? <img src={imageUrl + item.imageId} className="w-40"/> : <div className="w-40">No Image</div>}
                    </div>
                    <hr/>
                    </React.Fragment>
                })
            }
        </div>
    );
}

export default RestaurantDetails;