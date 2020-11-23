import React, { useState } from "react";
import ReactMapGl,{Marker} from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
        width: "82vw",
        height: "84vh",
        zoom: 3,
    });


    return (
        <div>
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle = "mapbox://styles/sagarsharma220/ckh91qmfh1l2l19ryq7263nzc"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }
                }
            > 
            </ReactMapGl>
        </div>
    );
}


export default Map;