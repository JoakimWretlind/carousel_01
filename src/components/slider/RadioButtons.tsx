import { Dispatch, SetStateAction } from "react";
import "./style.scss";

type ButtonProps = {
  slides: { id: number; pic: string; title: string }[];
  setIndex: Dispatch<SetStateAction<number>>;
  index: number;
};

export const RadioButtons = ({ slides, setIndex, index }: ButtonProps) => {
  return (
    <div className="radioContainer">
      {slides.map((btn: any, i: number) => {
        let activeClass = "activeBtn";
        if (i === index) {
          activeClass = "activeSlide";
        } else {
          activeClass = "";
        }
        return (
          <button
            onClick={() => setIndex(i)}
            className={activeClass ? "radioBtn activeClass" : "radioBtn"}
          ></button>
        );
      })}
    </div>
  );
};
