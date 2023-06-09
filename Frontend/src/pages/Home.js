import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

function Home() {
  const navigate = useNavigate();
  return (
    <div className=''>
      <Navbar/>
      <div className='title' style={{ backgroundImage: `url("bgr2.jpg")` }}>
        <h1>Rung-MOd</h1>
        <div className='brief'>A place that you can share your file for your friend</div>
        <div className='p-idiom'>
          Without studying the soul sick. (Seneca)
        </div>
        <button type='button' onClick={() => navigate('/profile')} className='nav-button'>
          start
        </button>
      </div>
      <div className='block-1'>
        <h2 className='main-title'>What is Rung-MOd</h2>
        <div>
          <p className='main-idea'><li>Web for everyone who want to share summarize file with your friend</li></p>
        </div>
      </div>
      <div className='block-2'>
        <h2 className='main-title2'>How do we do</h2>
        <div>
          <p className='main-idea2'><li>We group up who that want to share a good thing in class for everyone </li></p>
          <p className='main-idea2'><li>For brightness future in Thailand Education </li></p>
        </div>
        <div className='ld-button-b'>
          <button type='button' onClick={() => navigate('/profile')} className='nav-start-btn'>
            start
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

