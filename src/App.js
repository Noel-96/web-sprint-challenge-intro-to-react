import React, {useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL }  from './constants'
import './App.css';
import Character from './components/Character.js';
import { Container, Row, Col, Button } from 'reactstrap';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [rickAndMortyCharacters, setrickAndMortyCharacters] = useState([])

  useEffect(() => {

    
    axios.get(`${BASE_URL}`)
      .then(response =>  setrickAndMortyCharacters(response.data.results)
      )
      .catch(err => console.log(err))
      
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <div className="contain-grid">
      <Row xs="2">
      <Button color="primary" size="lg">Previous</Button>
      <div class="Container">
  
         {rickAndMortyCharacters.map(char => {
           return <Character key={char.id} data={char}/>
            })}
      </div>
      <Button color="primary" size="lg">Next</Button>
        
      </Row>
     </div>
    </div>
  );
}

export default App;
