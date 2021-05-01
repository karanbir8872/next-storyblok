import React from 'react';

const Teaser = ({ blok }) => {
  return (
    <div className="has-text-centered my-6">
      <h2>{blok.headline}</h2>
    </div>
  );
};

export default Teaser;
