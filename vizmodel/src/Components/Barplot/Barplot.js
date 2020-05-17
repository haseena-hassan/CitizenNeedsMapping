import React from 'react'
import './Barplot.css'


class Barplot extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:false
        }
    }
    render(){
        return(
            <div className="plot">
                <h2>Barplot</h2>
                <div className="row">
                    <div className="column">
                        <img src="http://127.0.0.1:5000/barplot-basic" alt="Basic Need"/>
                    </div>
                    <div className="column">
                        <img src="http://127.0.0.1:5000/barplot-standard" alt="Standard Need"/>
                    </div>
                    <div className="column">
                        <img src="http://127.0.0.1:5000/barplot-premium" alt="Premium Need"/>
                    </div>
                </div>
           </div>
        )
    }
}
export default Barplot;