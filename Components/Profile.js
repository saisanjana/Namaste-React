import React, { useEffect } from "react"
const Profile = () => {
    useEffect(()=>{
        console.log("Child USe effect")
    },[])
    console.log("Child Outside return")
    return (<div>{console.log("Child inside render")
    }Profile</div>)
}

export default Profile;