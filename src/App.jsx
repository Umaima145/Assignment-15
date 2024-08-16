import React from 'react';
import { Route, Routes } from "react-router-dom";  
import CreateUser from "./CreateUser";
import HomeScreen from './HomeScreen';

const App = () => {  
  return (          
    <Routes>
      <Route path="/" element={<HomeScreen />} />          
      <Route path="createUser" element={<CreateUser/>} />      
    </Routes>       
  );
};

export default App;
