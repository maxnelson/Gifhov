import { useRef } from "react";
import { GifhovMetadata } from "./GifhovMetadata";

export function GifhovComponent(props) {
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
      <div>
        <div ref={gifElement} className="">
          <img
            src={props.gifURL}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
          />
          <audio
            controls
            src={props.audioURL}
            preload="auto"
            ref={audioElement}
          >
            <source src={props.audioURL} />
          </audio>
        </div>
        <GifhovMetadata />
      </div>
    </>
  );
}
