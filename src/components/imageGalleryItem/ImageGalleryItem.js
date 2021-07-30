import React from "react";

const ImageGalleryItem = ({
  webformatURL,
  alt,
  id,
  largeImageURL,
  addLargeImg,
}) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt={alt}
        id={id}
        className="ImageGalleryItem-image"
        onClick={() => addLargeImg(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
