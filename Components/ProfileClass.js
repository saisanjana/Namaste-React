import React from "react"

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child Constructor"+this.props.xyz);
        this.state = {
            count:0,
            temp:"hai"
        }
    }
    componentDidMount(){
        console.log("Child CDM"+this.props.xyz);
    }
    render(){
        console.log("Child render"+this.props.xyz);
        return(
            <div>
                Profile class Component 
                {this.props.xyz}
                <br></br>
                {this.state.count}
                <br></br>
                {this.state.temp}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +1
                    })
                }}>Click</button>
            </div>
        );
    }
}

export default ProfileClass;