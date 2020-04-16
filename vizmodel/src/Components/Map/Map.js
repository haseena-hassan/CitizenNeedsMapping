import React from 'react'
import './Map.css'
import './script'


class Map extends React.Component{
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
                <div class="folium-map" id="map_e1e227d222d743bfb058ef5563fb6e20" ></div>
           </div>
        )
    }
}
export default Map;