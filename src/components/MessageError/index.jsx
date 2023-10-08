import React from 'react';

const MessageError = ({ type, message }) => {
  return <div className={type}>{message}</div>;
};

export default MessageError;
