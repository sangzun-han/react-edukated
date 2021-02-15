import React from 'react';

import Header from './screen/header';
import Sidebar from './screen/sidebar';
import Home from './screen/home';
import Rightbar from './screen/rightbar';
import Course from './screen/course';
import Discover from './screen/discover';
import Message from './screen/message';
import Settings from './screen/settings';

import './css/uifont.css';
import './css/props.css';
import './css/App.css';

import { Route, NavLink, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App flex'>
      <HashRouter>
        <Sidebar />
        <div className='app-content'>
          <Route exact path='/' component={Home} />
          <Route path='/course/:courseid' component={Course} />
          <Route path='/discover/' component={Discover} />
          <Route path='/message/' component={Message} />
          <Route path='/settings/' component={Settings} />
        </div>
      </HashRouter>
      {/* <Rightbar /> */}
    </div>
  );
}

export default App;
