import axios from "axios";

export const VideoByUser = async () => {
  return new Promise((resolve, reject) => {
    getVideobyUser().then((data) => {
        resolve(data);
    });
  });
};

export async function getVideobyUser() {
  const url = `http://localhost:8091/api/discapTrainingMedicalUser/TrainingPlan/MyVideo?discapUserID=${sessionStorage.getItem('id')}`
  try {
    const response = await axios.get(url)
    const data = response.data; // Obtenemos los datos de la respuesta de la API
    console.log('Datos recibidos:', data);
    return data;

  } catch (error) {
    console.log('Error al obtener los datos:', error);
  }
}
