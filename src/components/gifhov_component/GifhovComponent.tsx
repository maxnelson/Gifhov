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
      <div className="position-relative margin-bottom-2rem">
        <div ref={gifElement} className="">
          <a
            href={
              window.location.origin +
              "/user/" +
              props.ownerID +
              "/gifhov/" +
              props.gifhovID
            }
          >
            <img
              src={props.gifURL}
              onMouseOver={mouseOverHandler}
              onMouseOut={mouseOutHandler}
            />
          </a>
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
