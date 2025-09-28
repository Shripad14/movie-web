import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  //   a practice to store loading and error variables in state while calling API's.
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Unable to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)

    try{
        const searchResult = await searchMovies(searchQuery)
        setMovies(searchResult);
        setError(null);
    }catch (err){
        console.log(err);
        setError("failed to load movies...")
    }finally{
        setLoading(false);
    }
  };

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
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div>loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
