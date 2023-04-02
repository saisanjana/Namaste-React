import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import { RestoCards } from "../config";

const filterData = (searchText) => {
    console.log(searchText)
    return RestoCards.filter((restaurant)=>{
        console.log(restaurant)
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    });
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(RestoCards);

    return (
        <React.Fragment>
            <div className="searchBox">
                <input
                    className="searchContainer"
                    type="text"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button className="searchButton" onClick={()=>{
                    let data = filterData(searchText);
                    setRestaurants(data);
                }}>
                    Search
                </button>
            </div>
            <div className="appBody">
                {restaurants.map((restaurant)=>{
                    return <RestaurantCard {...restaurant.data}/>
                })}

            </div>
        </React.Fragment>
        );
}
export default Body;