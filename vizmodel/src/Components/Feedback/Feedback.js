import React from 'react'
import './Feedback.css'


class Feedback extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            email:'',
            message:''
        }
    }
    setData=e=>{
        if(e.target.id=="name")
            this.setState({name:e.target.value});
        else if(e.target.id=="email")
            this.setState({email:e.target.value});
        else
            this.setState({message:e.target.value});
    }
    upload=()=>{
        console.log(this.state);
        this.props.callFeedback();
    }
    render(){
        return(
            <div className="feedback">
                <div className="close">
                    <i className="fa fa-times" onClick={this.props.callFeedback}></i>
                </div>
                <input id="name" type="text" placeholder="Full Name" onChange={this.setData} required/>
                <input id="email" type="email" placeholder="Email" onChange={this.setData} required/>
                <textarea  id="message" row="3" col="50" placeholder="Message" onChange={this.setData} required/>
                <button type="submit" onClick={this.upload}>Submit your feedback</button>
           </div>
        )
    }
}
export default Feedback;