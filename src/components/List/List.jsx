import React,{useState} from 'react';
import { CircularProgress,Grid, Typography,InputLabel , MenuItem, FormControl , Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


// ! Circular progerss is just loading bar 

import useStyles from "./styles";




const List = () => {
    const classes = useStyles();
    const [type, settype] = useState('restaurants');
    const [rating, setrating] = useState('');
    const places = [
        { name: "cool place" },
        {name:"cool place"},
        { name: "cool place" },
        { name: "cool place" },
        { name: "Sinhgad college of everything but engg," },
        { name: "iit bombay college of absolute chade " },
        
    ]
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants , Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>settype(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setrating(e.target.value)}>
                    <MenuItem value={0}>All Ratings</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>

                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {/* places? means if places is there then only we map and use it otherwise let it be .  */}
                {places.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                        {/* card will be rendered automatically once  we import it from respective jsx which we actually did . fuck the error  */}
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default List;