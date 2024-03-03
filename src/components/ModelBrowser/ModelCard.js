import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ModelCard = ({ modelsData, selectedModelId }) => {
  const { id } = useParams();

 
  const selectedModel = modelsData.find(model => model.id === selectedModelId);

  
  if (!selectedModel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="model-card model-browser">
      <div className="model-header">
        <img src={`../../../images/${selectedModel.logo}`} alt={`${selectedModel.name} Logo`} className="model-logo" />
        <h3>{selectedModel.name}</h3>
      </div>
      <p>{selectedModel.details}</p>
      <div className="interaction-icons">
        <Link to={`/models/${selectedModel.id}`} className="model-link">
          {/* Use Link to navigate to ModelDetails page */}
          <i className="fas fa-info-circle" style={{ color: 'blue', cursor: 'pointer' }}></i>
        </Link>
        <i className="fas fa-heart" style={{ color: 'red', cursor: 'pointer' }}></i>
        <i className="fas fa-share" style={{ color: 'green', cursor: 'pointer' }}></i>
      </div>
    </div>
  );
};

export default ModelCard;

