import React, { useState } from 'react';
import './Register.css';
import CreateUserAPI from '../api/CreateUser';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [sex, setSEx] = useState('');
  const [department, setDepartment] = useState('');

  const handlevalueregs = async (event) => {
    event.preventDefault();
    const data = {
      name,
      surname,
      email,
      password,
      confirmPassword,
      faculty,
      major,
      year,
      sex,
      department,
    };

    const res = await CreateUserAPI(data);

    console.log(res);
    if (res.status === 'success') {
      alert('Register Success');
      navigate('/login');

      return;
    }

    alert(res.message);
  };

  return (
    <body className='regs'>
      <div className='regs-img-logo'>
        <img src='Rungmodlogo.jpg' className='regs-logo' />
      </div>
      <div className='regs-logo-title'>Rung-MOd</div>
      <div className='regs-title'>Register</div>
      <form onSubmit={handlevalueregs}>
        <div>
          <label>Name : </label>
          <br></br>
          <input type='text' placeholder='Name' onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Surname : </label>
          <br></br>
          <input
            type='text'
            placeholder='Surname'
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
        <div>
          <label>Email : </label>
          <br></br>
          <input
            type='email'
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password : </label>
          <br></br>
          <input
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label>ConfirmPassword : </label>
          <br></br>
          <input
            type='password'
            placeholder='Confirmpassword'
            onChange={(event) => setConfirmpassword(event.target.value)}
          />
        </div>
        <div>
          <label>Faculty : </label>
          <br></br>
          <input
            type='text'
            placeholder='Faculty'
            onChange={(event) => setFaculty(event.target.value)}
          />
        </div>
        <div>
          <label>Major : </label>
          <br></br>
          <input
            type='text'
            placeholder='Major'
            onChange={(event) => setMajor(event.target.value)}
          />
        </div>
        <div>
          <label>Department : </label>
          <br></br>
          <input
            type='department'
            placeholder='Department'
            onChange={(event) => setDepartment(event.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label>Year : </label>
          <select onChange={(e) => setYear(e.target.value)}>
            <option selected disabled hidden></option>
            <option value={1}>year 1</option>
            <option value={2}>year 2</option>
            <option value={3}>year 3</option>
            <option value={4}>year 4</option>
          </select>
        </div>
        <br></br>
        <div>
          <label>Sex : </label>
          <input type='radio' value='male' checked={sex === 'male'} onChange={(event) => setSEx(event.target.value)} />
          <label>Male</label>
          <input type='radio' value='female' checked={sex === 'female'} onChange={(event) => setSEx(event.target.value)} />
          <label>Female</label>
          <input type='radio' value='other' checked={sex === 'Other'} onChange={(event) => setSEx(event.target.value)} />
          <label>Other</label>
        </div>
        <br></br>
        <button type='submit'>Create account</button>
      </form>
    </body>
  );
}

export default Register;
