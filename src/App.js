import './App.css';
import MovieCard from './components/MovieCard'
import Search from './components/Search';

import { useEffect, useState } from 'react';
import { getMovie } from './api'



function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie("Dragon Ball" , setMovies);
  }, [])

  

  return (
    <div className="app">
      <h1>Simple Movie App</h1>
      <Search state={ setMovies } />
      {movies ? 
        <div className='container'>
          {movies.map((movie)=>(
            <MovieCard movie={movie} />
          ))}
        </div> :
        <div className='empty'>
            <h2>Not Movies Found</h2>
        </div>
      }
    </div>
  );
}

export default App;
