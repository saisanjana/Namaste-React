import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div className="header">
        <Link to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwIUy1t2Lz3UzqmOIhgjaYxb7uAL7zIg2hVo6QEyLHZ3-rl_e6haXHtQYjFK1ORyCDBw&usqp=CAU" className="appLogo"/></Link>
        <ul className="navItems">
            <Link to="/about"><li className="headerItem">About</li></Link>
            <li className="headerItem">Offers</li>
            <Link to={"/contact"}><li className="headerItem">Contact</li></Link>
            <Link to={"/signin"}><li className="headerItem">Sign in</li></Link>
            <li className="headerItem">Cart</li>
        </ul>
        
    </div>);
}
export default Header;