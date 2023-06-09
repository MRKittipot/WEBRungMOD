import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import GetDocumentByIdAPI from '../api/GetDocumentById';
import AddCollectionAPI from '../api/AddCollection';
//import Navbar from '../component/navbar';
//import Footer from '../component/footer';

function Detail() {
  const { document_id } = useParams();
  const [documentData, setDocumentData] = useState({});

  useEffect(() => {
    async function getDocementByID(document_id) {
      const res = await GetDocumentByIdAPI(document_id);
      setDocumentData(res.data);
    }

    getDocementByID(document_id);
  }, []);

  const onAddData = async () => {
    const res = await AddCollectionAPI(document_id);

    if (res.status === 'success') {
      alert('Get All Collection Success');
      return;
    }

    alert('Get All Collection Failed');
  };

  return (
        <div className='center-container'>
        <div className='detail-document-block'>
          <div className='detail-document-data'>
            <div>DocumentName : {documentData.title}</div>
            <div>Faculty : {documentData.faculty}</div>
            <div>Major : {documentData.major}</div>
            <div>Year : {documentData.year}</div>
          </div>
          <div className='detail-document-btn'>
            <button onClick={onAddData}>Add</button>
            <button>
              <a href={`http://localhost:8080/api/document/download/${documentData._id}`} className='detail-download-btn'>
                Download
              </a>
            </button>
          </div>
        </div>
        </div>
  );
}

export default Detail;
