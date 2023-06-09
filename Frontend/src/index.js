import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
//import Layout from "./pages/Layout";
//import Navbar from './component/navbar';
import Register from './pages/Register';
import Card from './component/card';
import Collection from './pages/collection';
import Detail from './pages/Detail';
import './index.css';
import Addpage from './pages/addpage';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route index element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='Regs' element={<Register />} />
        <Route path='card' element={<Card />} />
        <Route path='collection' element={<Collection />} />
        <Route path='/detail/:document_id' element={<Detail />} />
        <Route path='addpage' element={<Addpage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
