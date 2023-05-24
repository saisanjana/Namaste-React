import { imageUrl } from "../config";

const CartCard = (props) => {
    let {cloudinaryImageId, name, cuisines, avgRating} = props
    return (
        <div className="m-2 hover:shadow-md h-96 bg-gray-50 w-60">
            <img className="w-56" src={imageUrl + cloudinaryImageId}/>
            <div className="restoCardItems">
                <h3>{name}</h3>
                
            </div>
        </div>
    );
}
export default CartCard;