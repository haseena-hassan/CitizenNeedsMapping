import React from 'react'
import './Landing.css'
import Topnav from '../Topnav/Topnav'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

class Landing extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Feedback: false
        }
    }
    callFeedback=()=>{
        this.setState({Feedback: !this.state.Feedback});
        window.scrollTo(0,0);
    }
    render(){
        return(
            <div className="Landing">
                <Topnav/>
                <Body Feedback={this.state.Feedback} callFeedback={this.callFeedback}/>
                <Footer Feedback={this.state.Feedback} callFeedback={this.callFeedback}/>
            </div>
        )
    }
}
export default Landing;