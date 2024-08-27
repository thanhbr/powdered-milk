import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Image from "next/image";

type PropSlides = {
  id: number;
  label: string;
  src: string;
};

type PropType = {
  slides: PropSlides[];
  options?: EmblaOptionsType;
  playOnInit?: boolean;
  delay?: number;
  showControls?: boolean;
  stopOnInteraction?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
    playOnInit = true,
    delay = 5000,
    showControls = false,
    stopOnInteraction = false,
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit, delay, stopOnInteraction }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <Image src={slide.src} alt={slide.label} width={410} height={155} />
            </div>
          ))}
        </div>
      </div>
      {showControls && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onButtonAutoplayClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>

          <button className="embla__play" onClick={toggleAutoplay} type="button">
            {isPlaying ? "Stop" : "Start"}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
