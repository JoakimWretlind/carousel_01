import { useState } from "react";
import { Carousel } from "./Carousel";
import { RadioButtons } from "./RadioButtons";
import "./style.scss";

import pic01 from "/images/pic01.jpg";
import pic02 from "/images/pic02.jpg";
import pic03 from "/images/pic03.jpg";
import pic04 from "/images/pic04.jpg";
import pic05 from "/images/pic05.jpg";

const slides = [
  { id: 1, pic: pic01, title: "slide1" },
  { id: 2, pic: pic02, title: "slide2" },
  { id: 3, pic: pic03, title: "slide3" },
  { id: 4, pic: pic04, title: "slide4" },
  { id: 5, pic: pic05, title: "slide5" },
];

const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  const lastIndex = slides.length - 1;

  const prevSlide = () => {
    setIndex(index - 1);
    if (index < 1) {
      setIndex(lastIndex);
    }
  };

  const nextSlide = () => {
    setIndex(index + 1);
    if (index > lastIndex - 1) {
      setIndex(0);
    }
  };

  return (
    <main>
      <div className="pageWrapper">
        <button className="directionBtn prev" onClick={prevSlide}>
          &lt;
        </button>
        <Carousel slides={slides} index={index} />
        <button className="directionBtn next" onClick={nextSlide}>
          &gt;
        </button>
        <RadioButtons slides={slides} index={index} setIndex={setIndex} />
      </div>
    </main>
  );
};

export default Slider;
