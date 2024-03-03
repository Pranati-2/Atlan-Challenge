// CreateModelModal.js

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'linen',
  fontFamily: 'Arial, sans-serif', // Set your desired font-family
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: 8,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  width: '100%',
  marginBottom: '16px',
};



const CreateModelModal = ({ open, onClose, onCreate }) => {
  const [modelName, setModelName] = useState('');
  const [modelLogo, setModelLogo] = useState('');
  const [modelDescription, setModelDescription] = useState('');

  const handleCreate = () => {
    if (!modelName || !modelLogo || !modelDescription) {
      return;
    }

    const newModel = {
      name: modelName,
      logo: modelLogo,
      details: modelDescription,
      likes:0,
      shares:0
    };

    
    onCreate(newModel);

    
    setModelName('');
    setModelLogo('');
    setModelDescription('');
    onClose();
  };
  
  

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={2}>
          Create a New Model
        </Typography>

        {/* Name TextField */}
        <TextField
          label="Name"
          variant="outlined"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          sx={inputStyle}
        />

        {/* Logo URL TextField */}
        <TextField
          label="Logo URL"
          variant="outlined"
          value={modelLogo}
          onChange={(e) => setModelLogo(e.target.value)}
          sx={inputStyle}
        />

        {/* Description TextField */}
        <TextField
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          value={modelDescription}
          onChange={(e) => setModelDescription(e.target.value)}
          sx={inputStyle}
        />

        {/* Create Model Button */}
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create Model
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateModelModal;
