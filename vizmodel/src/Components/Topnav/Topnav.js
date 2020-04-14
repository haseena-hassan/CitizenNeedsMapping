import React from 'react'
import './Topnav.css'
class Topnav extends React.Component{
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
                <p>Hi kurange</p>
           </div>
        )
    }
}
export default Topnav;