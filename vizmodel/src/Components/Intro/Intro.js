import React from 'react'
import './Intro.css'
import Hero from '../../Assets/Images/hero-img.png'
import Logo from '../../Assets/Images/Logo.png'


class Intro extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:false
        }
    }
    render(){
        return(
            <div>
                <img src={Hero} class="hero-image"></img>
                <div class="hero-text">
                    {/* <img src={Logo}></img> */}
                    <h1>Citizen Needs <br/>Mapping</h1>
                    <button>Attempt Syrvey</button>
                </div>
            </div>
        )
    }
}
export default Intro;