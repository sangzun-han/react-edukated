import React, { useState } from 'react';
import logo from '../image/logo-coral.svg';

function Sidebar() {
  const [nav, setNav] = useState([
    { label: 'Home', slug: '/', icon: 'icon-home' },
    { label: 'Discover', slug: 'discover', icon: 'icon-compass' },
    { label: 'Message', slug: 'message', icon: 'icon-bubbles3' },
    { label: 'Settings', slug: 'settings', icon: 'icon-users' },
  ]);

  const [currentPage, setCurrentPage] = useState('/');

  let navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={'nav-' + i + '-' + nav[i].slug}>
        <a
          href={nav[i].slug}
          className={
            'aic link noul flex c333' +
            (currentPage == nav[i].slug ? ' on ' : '')
          }
        >
          <div className={'ico s20 ' + nav[i].icon} />
          <h2 className='lbl s20'>{nav[i].label}</h2>
        </a>
      </li>
    );
  }
  return (
    <sidebar className='sidebar rel'>
      <a href='#' className='logo bl'>
        <img src={logo} alt='logo' className='bl' />
      </a>
      <ul className='nav'>{navigation}</ul>
      <div className='updated-course flex aic'>
        <div className='icon-brightness-contrast cfff ico'></div>
        <div className='lbl s15 fontb c333'>
          Updated Courses
          <h2 className='author s13 c777'>By Peter</h2>
        </div>
      </div>

      <div className='stats flex aic'>
        <div className='stats-box flex'>
          <div className='ico s24 icon-star-full'></div>
          <h2 className='val s15 fontb'>1800</h2>
          <h2 className='lbl s13 c777'>potins</h2>
        </div>

        <div className='stats-box flex'>
          <div className='ico s24 icon-stats-dots'></div>
          <h2 className='val s15 fontb'>45.3</h2>
          <h2 className='lbl s13 c777'>complete</h2>
        </div>
      </div>

      <div className='me flex aic'>
        <div className='photo cfff s24'>
          <img
            src='http://placeimg.com/100/100/people'
            className='lbl'
            alt='profile'
          />
        </div>
        <div className='lbl s15 fontb c333'>
          Peter
          <h2 className='uname s13 c777'>@peter</h2>
        </div>
      </div>
    </sidebar>
  );
}

export default Sidebar;
