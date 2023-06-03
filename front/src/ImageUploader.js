import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ onFormSubmit }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('/api/upload', formData);
      onFormSubmit(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageUpload} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ImageUploader;
