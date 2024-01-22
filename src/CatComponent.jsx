import React from 'react';

function CatComponent({ width = '200px', height = '200px' }) {
  return (
    <img
      src="https://i.imgur.com/O3EIPHpb.jpg"
      alt="Cute Cat"
      style={{ width: width, height: height }}
    />
  );
}

export default CatComponent;
