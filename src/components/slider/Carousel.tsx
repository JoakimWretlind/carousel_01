import "./style.scss";

type SliderProps = {
  slides: { id: number; pic: string; title: string }[];
  index: number;
};

export const Carousel = ({ slides, index }: SliderProps) => {
  return (
    <div className="carouselWrapper">
      {slides.map((slide, slideIndex) => {
        const { id, pic, title } = slide;
        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === slides.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div className={`article ${position}`} key={id}>
            <img src={pic} alt={title} className="slideImg" />
          </div>
        );
      })}
    </div>
  );
};
