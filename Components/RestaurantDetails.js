import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { imageUrl } from "../config";

const RestaurantDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState(null);
    const [menu, setMenu] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    const getRestaurantInfo = async() => {
        let json = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4376372&lng=78.4766152&restaurantId=${id}`);
        let data = await json.json();
        setDetails(data.data.cards[0].card.card.info);
        let menuItems = []
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.forEach((item) => {
            if(item.card.card.itemCards){
                item.card.card.itemCards.forEach((itemCard) => {
                    menuItems.push(itemCard.card.info)
                })
            }
        })
        setMenu(menuItems);
    }
    
    return (!details || !menu ? <Loader/> : 
        <div className="sHeader">
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
                    <div className="restaurantDetailsHeader">
                        <h3>{item.name}</h3>
                        {item.imageId ? <img src={imageUrl + item.imageId} className="menuItemImage"/> : <div className="menuItemImage">No Image</div>}
                    </div>
                    <hr/>
                    </React.Fragment>
                })
            }
        </div>
    );
}

export default RestaurantDetails;