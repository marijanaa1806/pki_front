// TitleComponent.jsx
import React from 'react';
import '../titlecss.css'

const TitleComponent = ({ title }) => {
  return (
    <div style={{
      textAlign: 'center',
      margin: '0',
      backgroundColor:  '#461607',
      color: '#ffffff', 
      fontSize:'15px',
      padding: '15px',
      
      
    }}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleComponent;
