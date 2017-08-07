import React from 'react';

const GetImage = ({ images, alt }) => {
  if (images && images.smallThumbnail) {
    return (
      <img
        src={images.smallThumbnail}
        alt={alt}
      />
    );
  }

  return <span>Sem Foto</span>;
};

export default GetImage;
