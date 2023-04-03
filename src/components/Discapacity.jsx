import React, { useState, useEffect } from 'react';
import { getDiscapacity } from '../service/discapacity';

function Discapacity() {

  const [infoDiscapacity, setInfoDiscapacity] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getDiscapacity();
      setInfoDiscapacity(result);
    }
    fetchData();
  }, []);

  return (
    <>
    {infoDiscapacity ? (
      <>
        {infoDiscapacity.results.map((item, index) =>(
        <ul key={index}>
          <li>{item.typeDiscapacity}</li>
        </ul>
        ))}
      </>
      ) : (
        <>
        <ul>No trajo información</ul>
        </>
    )}
   
    </>
  );
}

export default Discapacity;