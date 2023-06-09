import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import './Profile.css';
import Card from '../component/card';
import Navbar from '../component/navbar';
import verifyTokenAPI from '../api/JwtVerify';

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    faculty: '',
    department: '',
    year: '',
    sex: '',
    name: '',
    major: '',
    surname: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    async function fetchProfile() {
      const res = await verifyTokenAPI(token);
      setUserData(res.data);
    }

    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className='head'>Profile</h1>
      <div className='profile'>
        <Avatar alt='react' sx={{ width: 256, height: 256 }} className='avatar'>
          {userData?.name[0]}
        </Avatar>
        <div className='information'>
          <p className='inf-profile'>
            Name : {userData.name} {userData.surname} <br />
            Year : {userData.year} <br />
            Faculty : {userData.faculty} <br />
            Department : {userData.department} <br />
          </p>
        </div>
      </div>
      <div className='btn'>
        <button type='button' onClick={() => navigate('/')}>
          Go back
        </button>
        <button type='button' onClick={() => navigate('/collection')}>
          Go to collection
        </button>
      </div>
      <div className='fav-block'>
        {userData.userCollection?.map((item) => {
          return <Card key={item._id} title={item.title} id={item._id} isUserCollection={true}/>;
        })}
      </div>
      <div className='profile-footer'>
        <div className='add-button-block'>
          <button className='add-button-btn' onClick={() => navigate('/addpage')}>
            Add File
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
