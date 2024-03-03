// WallOfFame.js
import React, { useState, useEffect } from 'react';
import './WallOfFame.css';

const WallOfFame = ({ modelsData }) => {
  const [topLiked, setTopLiked] = useState([]);
  const [topShared, setTopShared] = useState([]);

  useEffect(() => {
    const sortedByLikes = [...modelsData].sort((a, b) => b.likes - a.likes);
    const sortedByShares = [...modelsData].sort((a, b) => b.shares - a.shares);

    setTopLiked(sortedByLikes.slice(0, 3));
    setTopShared(sortedByShares.slice(0, 3));
  }, [modelsData]);

  return (
    
    <div className="wall-of-fame">
      
      <div className="top-liked">
        <h2>Top Liked Models</h2>
        <div className="model-list">
          {topLiked.map(model => (
            <div key={model.id} className="fame-card">
              <img src={model.logo} alt={`${model.name} Logo`} className="model-logo" />
              <p>{model.name}</p>
              <p>Likes: {model.likes}</p>
            </div>
          ))}
        </div>
      </div>
      <img id="wallOfFameImage" src="data:image/png;base64,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">
      </img>
      <div className="top-shared">
        <h2>Top Shared Models</h2>
        <div className="model-list">
          {topShared.map(model => (
            <div key={model.id} className="fame-card">
              <img src={model.logo} alt={`${model.name} Logo`} className="model-logo" />
              <p>{model.name}</p>
              <p>Shares: {model.shares}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallOfFame;
