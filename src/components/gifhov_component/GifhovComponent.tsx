import { useRef } from "react";
import { GifhovMetadata } from "@/components/gifhov_component/GifhovMetadata";

export function GifhovComponent(props) {
  const gifElement = useRef<HTMLImageElement>(null);
  const audioElement = useRef<HTMLAudioElement>(null);
  const mouseOverHandler = () => {
    audioElement.current?.play();
  };

  const mouseOutHandler = () => {
    audioElement.current?.pause();
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
        <GifhovMetadata ownerID={props.ownerID} gifhovID={props.gifhovID} />
      </div>
    </>
  );
}
