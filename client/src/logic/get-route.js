import axios from 'axios';

export default function getRoute(start, destination) {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;    
    const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + start + '&destination=' + destination + '&key=' + API_KEY;
    return axios.get(url);
}