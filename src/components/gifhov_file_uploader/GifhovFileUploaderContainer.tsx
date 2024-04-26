import { DragGifDiv } from "@/components/gifhov_file_uploader/DragGifDiv";
import { DragAudioDiv } from "@/components/gifhov_file_uploader/DragAudioDiv";
import { SampleGifhov } from "@/components/gifhov_file_uploader/SampleGifhov";

export function GifhovFileUploaderContainer() {
  return (
    <>
      <div className="upload_container">
        <DragGifDiv />
        <span className="equationText">+</span>
        <DragAudioDiv />
        <span className="equationText">=</span>
        <SampleGifhov />
      </div>
    </>
  );
}
