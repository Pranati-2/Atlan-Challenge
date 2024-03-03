// ModelDetailsModal.js

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ModelDetailsModal = ({ isOpen, onClose, model }) => {
  if (!isOpen || !model) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="model-details-modal-title">
      <Box>
        <Typography variant="h6" component="h2">
          {model.name} Details
        </Typography>
        <p>ID: {model.id}</p>
        <p>Description: {model.description}</p>
        <p>Provider: {model.provider}</p>
        <p>Example Code:</p>
        <pre>{model.exampleCode}</pre>
        <p>Potential Use Cases: {model.useCases}</p>
        <button onClick={onClose}>Close</button>
      </Box>
    </Modal>
  );
};

export default ModelDetailsModal;
