import React from 'react'
import './App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
const App = () => {
   
  return (
  <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
    </Routes>
  </main>
)}

export default App