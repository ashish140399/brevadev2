import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Services from './components/Services/services';
import Work from './components/Work/work';
import Team from './components/Team/team';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Work/>
      <Team/>
    </div>
  );
}

export default App;
