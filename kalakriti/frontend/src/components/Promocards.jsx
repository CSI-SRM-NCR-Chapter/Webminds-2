// PromoCards.jsx

import React from 'react';

const PromoCards = () => {
  return (
    <div className="promo-cards-container">
      <div className="promo-card">
        <img src="https://cdn-icons-png.flaticon.com/512/821/821405.png" alt="Train Promo" className="promo-icon" />
        <div className="promo-content">
          <p>Book Trains with voice chats!</p>
          <p>Use Code: MMTMYRA</p>
        </div>
      </div>
      <div className="promo-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOaajzvUOor_7RfoUgy7Q0BV1xEzLIJTSYUOCGF8Uu3AyqACGdvb4JR6gU6NYUFs0REA&usqp=CAU" alt="Flight Promo" className="promo-icon" />
        <div className="promo-content">
          <p>Planning to book International flight?</p>
        </div>
      </div>
      <div className="promo-card">
        <img src="data:image/png;base64,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" alt="Food Promo" className="promo-icon" />
        <div className="promo-content">
          <p>Finding food just got easier...</p>
          <p>Try new launched filters to find food</p>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;