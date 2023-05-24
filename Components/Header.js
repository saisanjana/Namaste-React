import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems)
    return (
    <div className="flex justify-between px-44 shadow-md">
        <Link to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwIUy1t2Lz3UzqmOIhgjaYxb7uAL7zIg2hVo6QEyLHZ3-rl_e6haXHtQYjFK1ORyCDBw&usqp=CAU" className="w-28 hover:animate-pulse"/></Link>
        <ul className="flex my-10 ">
            <Link to="/about"><li className="px-5 font-bold text-lg hover:text-orange-500">About</li></Link>
            <li className="px-5 font-bold text-lg hover:text-orange-500">Offers</li>
            <Link to={"/contact"}><li className="px-5 font-bold text-lg hover:text-orange-500">Contact</li></Link>
            <Link to={"/signin"}><li className="px-5 font-bold text-lg hover:text-orange-500">Sign in</li></Link>
            <Link to={"/cart"}><li className="px-2 font-bold text-lg hover:text-orange-500">Cart <span className="bg-green-500 p-1">{cartItems.length}</span></li></Link>
        </ul>
        
    </div>);
}
export default Header;