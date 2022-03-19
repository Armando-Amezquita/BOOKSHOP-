import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login.jsx'


function App() {

  return (
    <>
    <Routes >
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/login' element={<Login />}/>
    </Routes>
    </>
  );
}
export default App;
