import axios from "axios";
import {urlBase} from '../apis/apiBase';
import {getInfoUserByEmail} from '../apis/controllers'
import getToken from "./authToken";

export const InfoUser = async () => {
    return new Promise((resolve, reject) => {
        getInfoUser().then((data) => {
          resolve(data);
      });
    });
  };
  
  export async function getInfoUser() {
    const { access_token } = await getToken();
    const url = urlBase + getInfoUserByEmail + sessionStorage.getItem('email');
    const authorization = `Bearer ${access_token}`
    const headers = {
      'Authorization': authorization
    };
    try {
      const response = await axios.get(url, {headers})
      const data = response.data; // Obtenemos los datos de la respuesta de la API
      return data;
  
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  }


  
  