import React,{useState} from 'react';
import { CircularProgress,Grid, Typography,InputLabel , MenuItem, FormControl , Select } from '@material-ui/core';



// ! Circular progerss is just loading bar 

import useStyles from "./styles";




const List = () => {
    const classes = useStyles();
    const [type, settype] = useState('restaurants');
    const [rating, setrating] = useState('');

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
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default List;