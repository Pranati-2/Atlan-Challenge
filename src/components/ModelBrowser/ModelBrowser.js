// ModelBrowser.js - Component for browsing models

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './ModelBrowser.css';

const ModelBrowser = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Fetch models from the mock API (JSON Placeholder)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setModels(response.data);
      })
      .catch(error => {
        console.error('Error fetching models:', error);
      });
  }, []);

  return (
    <div className="model-browser">
      <h2>Browse Models</h2>
      <div className="model-list">
        {models.map(model => (
          <div className="model-card" key={model.id}>
            <h3>{model.title}</h3>
            <p>{model.body}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelBrowser;
