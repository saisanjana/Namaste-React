import { imageUrl } from "../config";

const RestaurantCard = (props) => {
    let {cloudinaryImageId, name, cuisines, avgRating} = props
    return (
        <div className="restoCard">
            <img src={imageUrl + cloudinaryImageId}/>
            <div className="restoCardItems">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{avgRating} stars</h5>
            </div>
        </div>
    );
}
export default RestaurantCard;