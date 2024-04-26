import { useState, useRef } from "react";

export function SampleGifhov() {
  var gifElement = useRef();
  var audioElement = useRef();
  const mouseOverHandler = () => {
    audioElement.current.play();
  };

  const mouseOutHandler = () => {
    audioElement.current.pause();
  };

  return (
    <>
      <div ref={gifElement} className="sample_gifhov">
        <img
          src="/public/sample_gifhovs/gifs/slam-dunk.gif"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />
        <audio
          controls
          src="/public/sample_gifhovs/audio/hero_instrumental.mp3"
          preload="auto"
          ref={audioElement}
        >
          <source src="/public/sample_gifhovs/audio/hero_instrumental.mp3" />
        </audio>
      </div>
    </>
  );
}
