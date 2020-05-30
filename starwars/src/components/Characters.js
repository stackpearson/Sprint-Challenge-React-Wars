import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {
    const [ charData, setCharData ] = useState([])
    console.log('hello')

    useEffect(() => {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            console.log('API from CardHolder',response.data.results);
            setCharData(response.data.results);
          })
          .catch(error => console.log("you goofed", error));
      }, []);

    return (
        <div>
            { charData.map((data, index) => {
                return <></>
                // <Character key={data.id} characters={data}/>
            })};
        </div>
    );
};

export default Characters;