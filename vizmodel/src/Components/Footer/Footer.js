import React from 'react'
import './Footer.css'
class Footer extends React.Component{
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
                <p>This is the footer</p>
           </div>
        )
    }
}
export default Footer;