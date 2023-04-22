import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurant_fetch_url } from "../config";

const useRestaurant = () => {
    const [details, setDetails] = useState(null);
    const [menu, setMenu] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        console.log(id)
        getRestaurantInfo();
    },[id])

    const getRestaurantInfo = async() => {
        let json = await fetch(`${restaurant_fetch_url}${id}`);
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

    return [details, menu];
}

export default useRestaurant;