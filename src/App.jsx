import logo from './logo.svg';
import './App.scss';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Cart from './pages/CartPage/cart';

function App() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/cart" element={<Cart/>} exact />
      {/* <Redirect to="/" /> */}
    </Routes>
  </BrowserRouter>
  );
}
export default App;
