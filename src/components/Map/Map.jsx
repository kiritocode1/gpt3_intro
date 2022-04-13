import React from 'react';
import GoogleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery } from "@material-ui/core";
//? paper is just div+bg color 
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles.js"

const Map = ({setCoordinates,setBounds,coordinates}) => {
    const classes = useStyles();
    // ?turns styles from the styles.js
    const isMobile = useMediaQuery('(min-width:600px)');
    //? isMobile variable will turn false when the screen-width is larger than 600 px ;
    // const coordinates={lat:18.5204, lng: 73.8567}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyAsuP38ZcJiZfB-dIicFOVOvsycSvrPwgk' }} defaultCenter={coordinates} center={coordinates} defaultZoom={14} margin={[50,50,50,50]} options={''} onChange={(e)=>{
                console.log(e);
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
            }} onChildClick={''}>
                {/* to get the key we goto google developer's console to interact 
                get the key here ->  https://console.cloud.google.com/projectcreate 
                log in , and  make a new project{TravelAdvisor} ,
                goto api lib 
                get the google javascript maps 
                create credentials from credentials 
                */}
            </GoogleMapReact>
        </div> 
    )
};

export default Map;