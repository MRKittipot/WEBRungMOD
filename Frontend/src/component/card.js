import { useNavigate } from 'react-router-dom';
import './Card.css';
import React from 'react';
import RemoveCollectionAPI from '../api/RemoveCollection';
import DeleteDocumentAPI from '../api/DeleteDocument';

const card = (props) => {
  const { title, id, isUserCollection } = props;

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      navigate(`/detail/${id}`);
      return;
    }
  };

  const handleDelete = async () => {
    if (isUserCollection) {
      const res = await RemoveCollectionAPI(id);

      if (res.status === 'success') {
        alert('Delete Success');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return;
      }

      alert('Delete Failed');
    } else {
      const res = await DeleteDocumentAPI(id);

      if (res.message === 'Document deleted successfully') {
        alert('Delete Success');

        setTimeout(() => {
          window.location.reload();
        }, 1000);

        return;
      }

      alert('Delete Failed');
    }
  };

  return (
    <div className='fr' onClick={handleClick}>
      <div className='cg' onClick={handleClick}>
        <img src='Rungmodlogo.jpg' className='clogo' onClick={handleClick} />
      </div>
      <div className='tagn' onClick={handleClick}>
        {title}
        <div className='btn-card' onClick={handleClick}>
          <button className='delete-btn-card' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;
