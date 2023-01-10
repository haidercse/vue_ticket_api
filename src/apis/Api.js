import axios from "axios";

const baseURL = 'http://localhost:8000/api/';
const access_token = localStorage.getItem("user");

const Api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
    }
});


export default Api;