import { useRef } from "react";
import { GifhovMetadata } from "@/components/gifhov_component/GifhovMetadata";

interface GifhovComponentProps {
  gifURL: string;
  audioURL: string;
}
export function GifhovComponent({ gifURL, audioURL }: GifhovComponentProps) {
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
            src={gifURL}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
          />
          <audio controls src={audioURL} preload="auto" ref={audioElement}>
            <source src={audioURL} />
          </audio>
        </div>
        <GifhovMetadata />
      </div>
    </>
  );
}
