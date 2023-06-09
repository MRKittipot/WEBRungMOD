import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import LoginUserAPI from '../api/LoginUser';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlevalueprofile = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);

    const res = await LoginUserAPI(data);

    localStorage.setItem('token', res.data.token);
    if (res.status === 'success') {
      navigate('/profile');
    }
  };

  return (
    <div className='main-block'>
      <div className='head-main-b'>
        <div className='logo-part'>
          <img src='Rungmodlogo.jpg' className='login-logo' />
        </div>
        <p className='p-title'>Rung-MOd</p>
        <p className='p-description'>for the future education</p>
      </div>
      <form onSubmit={handlevalueprofile}>
        <div className='body-main-b'>
          <div className='pe'>Email:</div>
          <input
            type='email'
            placeholder='Email'
            className='email-int'
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className='pw'>Password:</div>
          <input
            type='password'
            placeholder='password'
            className='password-int'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='foot-main-b'>
          <button className='sup' type='submit' onClick={() => navigate('/regs')}>
            Sign-up
          </button>
          <button className='sin' type='submit' /*onClick={()=>navigate("/")}*/>
            Sign-in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
