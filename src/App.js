import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import Header from './components/header';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Header/>
      <body>
        <Routes/>
      </body>
    </div>
  );
}

export default App;
