import axios from "axios";
import {getDiscapacities } from "../apis/controllers";
import { urlBase } from "../apis/apiBase";
import getToken from "./authToken";

export const Discapacity = async () => {
  return new Promise((resolve, reject) => {
    getDiscapacity().then((data) => {
        resolve(data);
    });
  });
};

export async function getDiscapacity() {
  const { access_token } = await getToken();
  const url = urlBase + getDiscapacities;
  const authorization = `Bearer ${access_token}`
  const headers = {
    'Authorization': authorization
  };
  try {
    const response = await axios.get(url, {headers})
    const data = response.data; // Obtenemos los datos de la respuesta de la API
    console.log('Datos recibidos:', data);
    return data;

  } catch (error) {
    console.log('Error al obtener los datos:', error);
  }
}