import React, { useState, useEffect } from 'react';
import { getMenuData } from '../service/menuData';
import Discapacity from '../components/Discapacity'

const Users = () => {

  const [infoUsers, setInfoUsers] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getMenuData();
      setInfoUsers(result);
    }
    fetchData();
  }, []);

  return (
    <>
    {infoUsers ? (
      <>
        {infoUsers.results.map((item, index) =>(
        <li key={index}>
          
          <h4>{item.name}</h4>
          <h5>{item.registerType}</h5>
          <Discapacity />
        </li>
        ))}
      </>
      ) : (
        <>
        </>
    )}
   
    </>
  );
}

export default Users