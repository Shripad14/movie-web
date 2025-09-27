import React from 'react'
import './App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';

const App = () => {
   
  return (
  <div>
    <NavBar/>
    <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
    </Routes>
  </main>
  </div>
)}

export default App