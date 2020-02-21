import React, { useState, useEffect } from 'react';
import starwarsData from './data/star-wars';
import Header from './components/Header';
import Display from './components/Display';
import Pagination from './components/Pagination';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState({
      characters: [],
      totalPosts: 0
    });
  const [page, setpage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    starwarsData.getPeople(page)
      .then(res => {
        const { count, results } = res.data;
        setData({
          characters: results,
          totalPosts: count
        });
      })
      .catch(err => console.log(err));
  }, [page]);

  const changePage = (pageNumber) => {
    setpage(pageNumber);
  }

  return (
    <div className="App">
      <Header />
      <Display characters={data.characters} />
      <Pagination postsPerPage={postsPerPage} totalPosts={data.totalPosts} changePage={changePage} currentPage={page} />
    </div>
  );
}

export default App;
