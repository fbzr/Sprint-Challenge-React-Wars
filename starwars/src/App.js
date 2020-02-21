import React, { useState, useEffect } from 'react';
import starwarsData from './data/star-wars';
import Header from './components/Header';
import Display from './components/Display';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setcharacters] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    starwarsData.getPeople()
      .then(res => setcharacters(res.data.results))
      .catch(err => console.log(err));
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Display characters={characters} />
    </div>
  );
}

export default App;
