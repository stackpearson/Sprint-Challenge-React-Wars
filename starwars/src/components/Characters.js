import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const Characters = () => {
    const [ charData, setCharData ] = useState([])

    useEffect(() => {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            // console.log('API from Characters',response.data.results);
            setCharData(response.data.results);
          })
          .catch(error => console.log("you goofed", error));
      }, []);

    return (
        <div>
            { charData.map((data, index) => {
                return <Character key={data.id} characters={data}/>
            })};
        </div>
    );
};

export default Characters;