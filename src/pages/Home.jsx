import React, {useState} from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id:1, title: "John Wick", release_date: "2020"},
        {id:2, title: "Terminator", release_date: "1999"},
        {id:3, title: "The Matrix", release_date: "1998"},
    ];

    const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

  return (
    <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Search for movies...." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
                className='search-button' 
                type="submit">
                    Search
            </button>
        </form>

        <div className="movie-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard
                    key={movie.id}
                    movie={movie}
                />
                )
            ))}
        </div>
    </div>
  )
}

export default Home