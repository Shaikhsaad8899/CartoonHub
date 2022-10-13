import React from 'react';
import {Routes,Route } from 'react-router-dom';
import { Login } from "./Components/Login";
import { Landing } from './Components/Landing';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <div><Login/></div>
      <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Landing' element={<Landing/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      </>
    </div>
  );
}

export default App;
