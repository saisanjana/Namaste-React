import {useContext, useEffect} from "react";
import UserContext from "../Contexts/UserContext";
import RestoContext from "../Contexts/RestoContext";

const Footer = () => {
    const user = useContext(UserContext);
    const resto = useContext(RestoContext);

    useEffect(()=>{
        console.log("Foooooter",user)
    },[user])
    return <div className="p-20 font-bold">Site developed by {user.user.email} {resto.dummy}</div>
}

export default Footer;
