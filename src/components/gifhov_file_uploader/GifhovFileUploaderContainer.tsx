import { DragGifDiv } from "@/components/gifhov_file_uploader/DragGifDiv";
import { DragAudioDiv } from "@/components/gifhov_file_uploader/DragAudioDiv";
import { GifhovComponent } from "@/components/gifhov_component/GifhovComponent";
import { useState } from "react";

export function GifhovFileUploaderContainer(props) {
  const [gifFileUpload, setGifFileUpload] = useState(null);
  const [audioFileUpload, setAudioFileUpload] = useState(null);
  return (
    <>
      <div className="upload_container">
        <DragGifDiv
          setGifFileUpload={setGifFileUpload}
          audioFileUpload={audioFileUpload}
        />
        <span className="equationText">+</span>
        <DragAudioDiv
          setAudioFileUpload={setAudioFileUpload}
          gifFileUpload={gifFileUpload}
        />
        <span className="equationText">=</span>
        <GifhovComponent
          gifURL={props.gifURL}
          audioURL={props.audioURL}
          ownerID={props.ownerID}
          gifhovID={props.gifhovID}
        />
      </div>
    </>
  );
}
