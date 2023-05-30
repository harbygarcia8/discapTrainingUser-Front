import axios from "axios";
import { urlToken } from "../apis/authenticationToken";
import { urlBase } from "../apis/apiBase";

const getToken = async (email, password) => {
    const urlAuth = urlBase + urlToken;
    const data = {
        email: sessionStorage.getItem('email', email),
        password: sessionStorage.getItem('password', password),
    };
    console.log(data)
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post(urlAuth, data, {headers});
        const access_token = response.data;
        console.log(access_token);
        return access_token;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};

export default getToken;
