import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */

  /* You will need to hanle the click on left and right button */

  /* You will need to manage the cases when we are on the last image or first image*/

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={goToPrevious}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={goToNext}/>
    </div>
  );
};
