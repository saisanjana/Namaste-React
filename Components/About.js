import React from "react"
import Profile from "./ProfileClass"

// const About = () => {
//     return (
//         <div>
//             About Us!
//         <Profile xyz={'abc'}/>
//         <Profile xyz={'xyz'}/>
//     </div>)
// }

class AboutClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor");
    }
    componentDidMount(){
        console.log("parent-CDM");
    }
    render(){
        console.log("parent-render");
        return(<div>
            About Us!
        <Profile xyz={'abc'}/>
        <Profile xyz={'xyz'}/>
    </div>)
    }
}

export default AboutClass;