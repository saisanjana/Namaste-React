import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartItem";
import { clearAllItems } from "../Redux/cartSlice";

const Cart = () => {
    const cratItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    return <div className="flex justify-between">
    {
        cratItems.map((item)=>{
            return <CartCard name={item.name} cloudinaryImageId={item.imageId}/>
        })
    }
    {cratItems.length ? <button className="p-4 m-3 bg-red-700 text-white" onClick={()=>{
        dispatch(clearAllItems())
    }}>Clear All</button> : <div className=" items-center font-bold"> Your cart feels so empty</div>}
    </div>;
}
export default Cart;