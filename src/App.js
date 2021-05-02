import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import clones from './images/starwarspattern.jpg'

import Character from './components/Character';

const BackgroundDiv = styled.div`
  background-image: url(${clones});
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [charactersArray, setCharactersArray] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({})

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharactersArray(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <BackgroundDiv>
      <Character charactersArray={charactersArray}
      selectedCharacter={selectedCharacter}
      setSelectedCharacter={setSelectedCharacter} />
    </BackgroundDiv>
  );
}

export default App;
