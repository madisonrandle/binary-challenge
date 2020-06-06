import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ myList, handleMyList }) => {

  const handleNav = (e) => {
    handleMyList(e.target.id);
  }

  return (
    <nav className="nav">
      <Link
        to={'/'}
        className="activities-btn"
        onClick={ handleNav }
      >
        <p id="activities">Activities</p>
      </Link>

      <Link
        to={'/mylist'}
        className="favorites-btn"
        onClick={ handleNav }
      >
        <p id="mylist">My List</p>
      </Link>
    </nav>
  )
}

export default Nav;
