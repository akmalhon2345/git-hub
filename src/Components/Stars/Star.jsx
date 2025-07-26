import React from 'react';
import './star.css'; // CSS faylini alohida import qilish
import Edid from '../Sideba/Sidebar';

const Star = () => {
  return (
    <div className='overview_wrapper'>
        <Edid/>
    <div className="container-star">
      <div className="star-header">
        <h1>Lists (0)</h1>
        <div className="star-buttons">
          <button>Sort</button>

          <button>Create list</button>
        </div>
      </div>

      <div className="star-empty">
        <h1>Create your first list</h1>
        <p>
          Lists make it easier to organize and curate repositories that you have starred. Create your first list.
        </p>
      </div>

      <div className="star-title">
        <h1>Stars</h1>
      </div>

      <div className="star-controls">
        <input type="text" placeholder="Search repositories..." />
        <button>Search</button>
        <label>Type:</label>
        <button>Private</button>
        <label>Sort by:</label>
        <button>Recently starred</button>
      </div>
    </div>
    </div>
  );
};

export default Star;
