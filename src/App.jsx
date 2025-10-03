import React from 'react'
import './App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
   
  return (
  <MovieProvider>
    <NavBar/>
    <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
    </Routes>
  </main>
  </MovieProvider>
)}

export default App