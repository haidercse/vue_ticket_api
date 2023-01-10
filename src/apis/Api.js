import axios from "axios";
let access_token = localStorage.getItem("user");


const Api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-type': 'application/json',
        'Authorization' : `Bearer ${access_token}`
    }
});
export default Api;