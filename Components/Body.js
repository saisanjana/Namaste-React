import React, {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Loader from "./Loader";
// import { RestoCards } from "../config";
import SecondaryHeader from "./SecondaryHeader";
import { Link } from "react-router-dom";

const filterData = (searchText, allRestaurants) => {
    return allRestaurants.filter((restaurant)=>{
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    });
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteresRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[])

    const getRestaurants = async() => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4376372&lng=78.4766152&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteresRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return !allRestaurants.length ? (<Loader/>) : (
        <React.Fragment>
            <SecondaryHeader/>
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
                    let data = filterData(searchText,allRestaurants);
                    setFilteresRestaurants(data);
                }}>
                    Search
                </button>
            </div>
            {filteredRestaurants.length ? <div className="appBody">
                {filteredRestaurants.map((restaurant)=>{
                    return <Link to={`/restaurant/${restaurant.data.id}`}>
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    </Link>
                })}

            </div> : <div className="noDataFound">No Restaurants found with your search</div>}
        </React.Fragment>
        );
}
export default Body;