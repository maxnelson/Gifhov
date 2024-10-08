import { useRef } from "react";
import { GifhovMetadata } from "@/components/gifhov_component/GifhovMetadata";
import { GifhovComponentPropsType } from "@/utility_functions/typescript/types";

export function GifhovComponent(props: GifhovComponentPropsType) {
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
      <div
        className={
          "_position--relative " +
          (props.marginBottom ? "_margin-bottom--2rem " : "") +
          (props.marginTop ? "_margin-top--5rem " : "")
        }
      >
        <div ref={gifElement}>
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
