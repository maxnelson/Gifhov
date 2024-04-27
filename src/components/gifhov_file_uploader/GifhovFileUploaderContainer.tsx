import { DragGifDiv } from "@/components/gifhov_file_uploader/DragGifDiv";
import { DragAudioDiv } from "@/components/gifhov_file_uploader/DragAudioDiv";
import { SampleGifhov } from "@/components/gifhov_file_uploader/SampleGifhov";
import { useState } from "react";

export function GifhovFileUploaderContainer() {
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
        <SampleGifhov />
      </div>
    </>
  );
}
