import React from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';

function GetData() {
    
    let url = 'https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/rutina2019';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.rutina2019);
      return json.rutina2019;
    });

    
}
  
    
export default GetData;
