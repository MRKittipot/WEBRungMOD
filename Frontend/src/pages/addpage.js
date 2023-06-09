import React from 'react';
import './addpage.css';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import { useState } from 'react';
import CreateDocumentAPI from '../api/CreateDocument';

function addpage() {
  const [pdf, setPDF] = useState(null);
  const [document, setDocument] = useState('');
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [subject, setSubject] = useState('');
  const [year, setYear] = useState('');

  const handleFileChange = (e) => {
    setPDF(e.target.files[0]);
  };

  const handlevalue = async (event) => {
    event.preventDefault();

    const data = {
      title: document,
      faculty: faculty,
      major: major,
      subject: subject,
      year: year,
      pdf: pdf,
    };

    const res = await CreateDocumentAPI(data);

    if (res.message === 'Upload success') {
      alert('Upload success');
      return;
    }

    alert('Upload failed');
  };

  return (
    <body>
      <Navbar />
      <div className='path-back'>
        <a href='/profile' className='a'>File</a>
      </div>
      <div className='main-b-add'>
        <div className='img-detail'>
          <img src='bgr.jpg' className='img-add' />
        </div>
        <div className='add-detail'>
          <p className='add-detail-title'>ADD FILE</p>
          <div className='add-detail-subclass'>
            <form onSubmit={handlevalue} className='form-add'>
              <br></br>
              <div>
                <input type='file' onChange={handleFileChange} />
              </div>
              <label>document</label>
              <div>
                <input onChange={(event) => setDocument(event.target.value)} />
              </div>
              <label>faculty</label>
              <div>
                <input onChange={(event) => setFaculty(event.target.value)} />
              </div>
              <label>subject</label>
              <div>
                <input onChange={(event) => setSubject(event.target.value)} />
              </div>
              <label>major</label>
              <div>
                <input onChange={(event) => setMajor(event.target.value)} />
              </div>
              <br></br>
              <label>Year : </label>
              <select onChange={(e) => setYear(e.target.value)}>
                <option selected disabled hidden></option>
                <option value='1'>Year 1</option>
                <option value='1'>Year 2</option>
                <option value='1'>Year 3</option>
                <option value='1'>Year 4</option>
              </select>
              <div className='add-file-addpage'>
                <button type='submit'>ADD FILE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default addpage;
