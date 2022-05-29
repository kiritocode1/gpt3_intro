
import React,{useState,useEffect} from "react";
import {CssBaseline, Grid} from "@material-ui/core"
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./API";








function App() {
  const [places, setPlaces] = useState([]);
  console.log(places);
  const [coordinates, setCoordinates] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState({sw:69, ne:42});
  // top right and bottom left corners are called bounds ;








  //! /////////////////////////////////////////////////////////////////
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, []);
//! /////////////////////////////////////////////////////////////////

// ! most important useEffect , it takes the 
  useEffect(() => {
    console.log({"coordinates": coordinates,"bounds": bounds });
    getPlacesData(bounds.sw,bounds.ne)
      .then(
        (data) => {
          // console.log(data);
          setPlaces(data);
          console.log("set automatically");
      }
    )
  },[coordinates,bounds]);//only at the start of app 
  
  
  
  
  
  
  //! ///////////////////////////////////////////////////////////////////////////
  return (
    <>
      
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates = {coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
//! nice . 
