import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div` 
    
`;

const CharacterFlex = styled.div` 
    display: flex;
`;

const CharacterImg = styled.img` 
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

const CharacterImgContainer = styled.div` 
    width: 50%;
`;

const CharacterInfo = styled.div` 
    width: 50%;
    
`;

const Character = props => {
    // console.log('props from Character', props.characters.image);


    return (
        
        <CharacterContainer>

            <h2>{props.characters.name}</h2>
            <CharacterFlex>

                <CharacterImgContainer>
                    <CharacterImg src={props.characters.image}></CharacterImg> 
                </CharacterImgContainer>
                
                <CharacterInfo>
                    <ul>
                        <li>Species: {props.characters.species}</li>
                        <li>Origin Planet: {props.characters.origin.name}</li>
                        <li>Last known Location: {props.characters.location.name}</li>
                        <li>Last known Status: {props.characters.name}</li>
                    </ul>

                </CharacterInfo>

            </CharacterFlex>
              
        </CharacterContainer>
    )
}

export default Character;
