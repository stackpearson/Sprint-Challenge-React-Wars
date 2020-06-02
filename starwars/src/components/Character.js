import React from 'react';
import styled from 'styled-components';
import Episodes from './Episodes';

const CharacterContainer = styled.div` 
    margin: 2%;
    padding: 1%;
    border 2px solid black;
    border-radius: 10px;
`;

const CharacterEpisodes = styled.div`
    
`;

const CharacterFlex = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const CharacterImg = styled.img` 
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

const CharacterImgContainer = styled.div` 
    width: 50%;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const CharacterInfo = styled.div` 
    width: 50%;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
    
`;

const CharacterUl = styled.ul` 
    text-align: left;
    font-size: 1.2em;
`;

const Character = props => {
    // console.log('props from Character', props.characters.episode);


    return (
        
        <CharacterContainer>

            <h2>{props.characters.name}</h2>
            <CharacterFlex>

                <CharacterImgContainer>
                    <CharacterImg src={props.characters.image}></CharacterImg> 
                </CharacterImgContainer>
                
                <CharacterInfo>
                    <CharacterUl>
                        <li>Species: {props.characters.species}</li>
                        <li>Origin: {props.characters.origin.name}</li>
                        <li>Location: {props.characters.location.name}</li>
                        <li>Status: {props.characters.name}</li>
                    </CharacterUl>
                    <CharacterEpisodes>
                        <Episodes episodeArr={props.characters.episode}/>
                    </CharacterEpisodes>
                </CharacterInfo>

            </CharacterFlex>
              
        </CharacterContainer>
    )
}

export default Character;
