import React from 'react';

import Header from './screen/header';
import Sidebar from './screen/sidebar';

import './css/uifont.css';
import './css/props.css';
import './css/App.css';

function App() {
  return (
    <div className='App flex'>
      <Sidebar />
    </div>
  );
}

export default App;
