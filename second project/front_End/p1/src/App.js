import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([]);
  console.log(jokes);
  
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
  })

  return (
    <div className="App">
      <h1>Jokes: {jokes.lenght}</h1>
      {
        jokes.map((joke)=> {
          return (
            <div key={joke.id}>
              <h2>{joke.title}</h2>
              <p>{joke.joke}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
