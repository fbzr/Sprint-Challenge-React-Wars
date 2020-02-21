import React, { useEffect } from 'react';
import starwarsData from './data/star-wars';

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
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
