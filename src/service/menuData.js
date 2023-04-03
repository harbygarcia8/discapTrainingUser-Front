import axios from "axios";
import { urlBase } from "../apis/apiBase";
import { getUsers } from "../apis/controllers";

import getToken from "./authToken";

export const MenuData = async () => {
  return new Promise((resolve, reject) => {
    getMenuData().then((data) => {
      resolve(data);
    });
  });
};

export async function getMenuData() {
  const { access_token } = await getToken();
  let url = urlBase + getUsers;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const dataMenu = response.data;

    return dataMenu;
  } catch (error) {
    console.log(error);
  }
}
