import axios from "axios";


// const options = {
// //   method: 'GET',//is here by default hence removed 
// //   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//     params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     // restaurant_tagcategory_standalone: '10591',
//     // restaurant_tagcategory: '10591',
//     // limit: '30',
//     // currency: 'USD',
//     // open_now: 'false',
//     // lunit: 'km',
//     // lang: 'en_US'
//     },
//     headers: {
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//     'X-RapidAPI-Key': '461526573emsh333436890e661d4p122b96jsn728ba2bdf38b'
//     }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw,ne) => {
    try {
        // ! we can return res but we need what's inside , and that's data , so we destructure the data and then we do destructuring the data one more time to get to our restaurants . 
        const { data: { data } } = await axios.get(URL, {
                params: {
                    tr_latitude: ne.lat,
                    bl_latitude: sw.lat,
                    tr_longitude: ne.lng,
                    bl_longitude: sw.lng,
    },//so now we can dynamically do this , as we commented the options and made it dynamic in nature ,  
    headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '461526573emsh333436890e661d4p122b96jsn728ba2bdf38b'
    }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}