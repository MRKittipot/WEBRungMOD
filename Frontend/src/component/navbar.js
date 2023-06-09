import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

const navbar = () => {
  return (
    <>
      <nav>
        <div className='block'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/profile' className='link'>
            Profile
          </Link>
          <Link to='/collection' className='link'>
            collection
          </Link>
          <Link to='/login' className='link'>
            Log in
          </Link>
          <Link to="/regs" className='link'>
            Register
          </Link>
          <Link to='/' className='link-title'>
            <div className='antlogo'>
              <img src='Rungmodlogo.jpg' className='img-logo'/>
            </div>
            <div className='anttitle'>
              Rung-MOd
            </div>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default navbar;
