import React from 'react';

const HandleError = (error) => {
  const { message } = error;
  return <div className="error-message">{message}</div>;
};

export default HandleError;
