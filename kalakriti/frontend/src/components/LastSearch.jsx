// LastSearch.jsx

import React from 'react';

const LastSearch = () => {
  return (
    <div className="last-search-container">
      <h3>Last Search</h3>
      <div className="search-items">
        <div className="search-card">
          <strong>Train</strong>
          <p>New Delhi → Uttarakhand</p>
          <p>12th Feb 2024</p>
        </div>
        <div className="search-card">
          <strong>Flight</strong>
          <p>New Delhi → Bangalore</p>
          <p>10th Jan 2024</p>
        </div>
      </div>
    </div>
  );
};

export default LastSearch;
