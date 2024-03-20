import logo from './logo.svg';
import './App.scss';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
