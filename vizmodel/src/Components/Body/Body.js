import React from 'react'
import './Body.css'
class Body extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:''
        }
        this.absyes=this.absyes.bind(this);
    }
    yes=()=>{
        this.setState({example: "podi kurange"});
    }
    absyes(){
        this.setState({example: "enikkariyaam already"});
    }
    // Functions can be defined either way
    render(){
        return(
            <div>
                <p>are you kurangu?</p>
                <button onClick={this.yes}>Yes</button>
                <button onClick={this.absyes}>Absolutely Yes</button>
                <br/>
                <p>{this.state.example}</p>
           </div>
        )
    }
}
export default Body;