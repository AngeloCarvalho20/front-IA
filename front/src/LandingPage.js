import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import ResponseDisplay from './ResponseDisplay';
import './styles.css';

const LandingPage = () => {
  const [response, setResponse] = useState(null);

  const handleFormSubmit = (responseData) => {
    setResponse(responseData);
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <ImageUploader onFormSubmit={handleFormSubmit} />
      {response && <ResponseDisplay responseData={response} />}
    </div>
  );
};

export default LandingPage;
