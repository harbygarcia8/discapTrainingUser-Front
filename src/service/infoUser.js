import axios from 'axios';
import { urlBase } from '../apis/apiBase';
import getToken from './authToken'
import { getInfoUserByEmail } from '../apis/controllers'

export async function infoUserByEmail () {
    const { access_token } = await getToken();
    const urlFindByEmail = urlBase + getInfoUserByEmail + sessionStorage.getItem('email');
    const authorization = `Bearer ${access_token}`
    const headers = {
        'Authorization': authorization
    };
    try {
        const response = await axios.get(urlFindByEmail, {headers})
        const data = response.data
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }

}