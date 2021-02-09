import React from 'react';

import Header from './screen/header';
import Sidebar from './screen/sidebar';
import Home from './screen/home';
import Rightbar from './screen/rightbar';

import './css/uifont.css';
import './css/props.css';
import './css/App.css';

function App() {
  return (
    <div className='App flex'>
      <Sidebar />
      <div className='app-content'>
        <Home />
      </div>
      <Rightbar />
    </div>
  );
}

export default App;
