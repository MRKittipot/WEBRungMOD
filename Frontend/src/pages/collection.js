import React, { useEffect, useState } from 'react';
import './collection.css';
import Card from '../component/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import GetAllCollectionAPI from '../api/GetAllCollection';

function collection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [collectionData, setCollectionData] = useState([]);

  const handlevaluesearch = () => {
    console.log(search);
  };

  useEffect(() => {
    async function getAllCollection() {
      const res = await GetAllCollectionAPI();
      setCollectionData(res.data);
    }
    getAllCollection();
  }, []);

  return (
    <body className='bd'>
      <div className='bd2'>
        <Navbar />
        <div className='subbd'>
          <a href='/' className='a'>
            Home
          </a>
          <p className='collect-title'>What do you want?</p>
        </div>
        <div className='sb'>
          <input
            type='text'
            placeholder='Search'
            className='searchbar'
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className='search-btn' onClick={handlevaluesearch}>
            Search
          </button>
        </div>
      </div>
      <div className='bd3'>
        {collectionData.map((item) => {
          return <Card key={item._id} title={item.title} id={item._id} isUserCollection={false} />;
        })}
      </div>
      <div className='bd4'>
        <button
          onClick={() => {
            navigate('/addpage');
          }}
          className='add-btn-collection'
        >
          Add Button
        </button>
      </div>
    </body>
  );
}

export default collection;
