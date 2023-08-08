"use client";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css"; // Import CSS dari pustaka

const images = [
  "/image/bits.jpg",
  "/image/technicalsupport.jpg",
  "/image/sysadmin.jpg",
  "/image/dasarweb.png",
  "/image/dasarpemrograman.png",
  "/image/bangkit.png",
];

export default function ImageSlider() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <img
            src={image}
            alt={`Image ${index}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
