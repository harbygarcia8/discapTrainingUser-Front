import axios from "axios";
import {urlBase2} from '../apis/apiBase';
import {getDiscapUserRegisterTypeUsuario, getDiscapUserRegisterTypeESPECIALISTA} from '../apis/controllers'

export const infoDiscapUsers = async () => {
    return new Promise((resolve, reject) => {
        getInfoDiscapUsers().then((data) => {
          resolve(data);
      });
    });
  };
  
  export async function getInfoDiscapUsers() {
    const url = urlBase2 + getDiscapUserRegisterTypeUsuario;
    try {
      const response = await axios.get(url)
      const data = response.data; // Obtenemos los datos de la respuesta de la API
      return data;
  
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  }
  export async function getInfoSpecialist() {
    const url = urlBase2 + getDiscapUserRegisterTypeESPECIALISTA;
    try {
      const response = await axios.get(url)
      const data = response.data; // Obtenemos los datos de la respuesta de la API
      return data;
  
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  }
  