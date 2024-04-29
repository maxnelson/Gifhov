import { useState } from "react";
import { filesize } from "filesize";
import { uploadGifhov } from "@/utility_functions/uploadGifhov";

interface DragAudioDivProps {
  setAudioFileUpload: (file: File) => void;
  gifFileUpload: File;
}

export function DragAudioDiv({
  gifFileUpload,
  setAudioFileUpload,
}: DragAudioDivProps) {
  const [draggedOver, setDraggedOver] = useState("");
  const [validationErrorFileType, setValidationErrorFileType] = useState("");
  const [validationErrorFileSize, setValidationErrorFileSize] = useState(false);
  const [fileDropped, setFileDropped] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const isValidFileType = (file_type: string) => {
    if (file_type === "audio/mpeg" || file_type === "audio/x-m4a") {
      return true;
    }
    return false;
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const draggedFile = e.dataTransfer.items[0];
    if (isValidFileType(draggedFile.type)) {
      setDraggedOver("valid");
      setValidationErrorFileType("valid");
      return;
    } else {
      setDraggedOver("invalid");
      setValidationErrorFileType("invalid");
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggedOver("");
    setValidationErrorFileType("");
    setValidationErrorFileSize(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (isValidFileType(droppedFile.type)) {
      setValidationErrorFileType("invalid");
    }
    if (droppedFile.size > 30000000) {
      setValidationErrorFileSize(true);
    }
    if (isValidFileType(droppedFile.type) && droppedFile.size < 5242880) {
      setFileDropped(true);
      setFileName(droppedFile.name);
      setFileSize(filesize(droppedFile.size));
      setAudioFileUpload(() => {
        droppedFile;
      });
    }

    if (gifFileUpload?.size > 0) {
      console.log("dual file upload");
      uploadGifhov("anonymousGuest", gifFileUpload, droppedFile);
    }

    //once the dual file upload is complete, reroute to the newly created gifhov page
    //if audio has not been added, wait for audio to be added
  };

  const clearFileUploadHandler = () => {
    setAudioFileUpload(null);
    setFileDropped(false);
    setFileName("");
    setFileSize("");
    setValidationErrorFileType("");
    setValidationErrorFileSize(false);
    setDraggedOver("");
  };

  return (
    <>
      <div>
        <div
          className={
            draggedOver === "valid" || fileDropped
              ? "fileUploadInputDiv fileUploadInputDiv_draggedOverValid"
              : draggedOver === "invalid"
              ? "fileUploadInputDiv fileUploadInputDiv_draggedOverInvalid"
              : "fileUploadInputDiv"
          }
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
        >
          {fileDropped ? (
            <i className="fa-regular fa-circle-check color-green font-size-1rem"></i>
          ) : (
            <div className="pointer-events-none">
              <p className="text-align-center">
                <i className="fa-solid fa-file-music dragAndDropIcon"></i>
              </p>
              <p>drag audio</p>
            </div>
          )}
        </div>
        {fileDropped && (
          <div className="position-absolute padding-1 display-flex width-16rem">
            <div className="display-inline-block">
              <p>
                <i className="fa-regular fa-file font-size-2rem"></i>
              </p>
            </div>
            <div className="display-inline-block margin-left-1 width-fill-available">
              <p className="word-wrap-break-word">{fileName}</p>
              <p className="font-size-14px">{fileSize}</p>
            </div>
            <div className="display-inline-block margin-left-auto">
              <i
                className="fa-solid fa-circle-xmark cursor-pointer"
                onClick={clearFileUploadHandler}
              ></i>
            </div>
          </div>
        )}

        {!fileDropped && (
          <div>
            <ul>
              <li
                className={
                  validationErrorFileType == "invalid"
                    ? "invalidFileLi"
                    : validationErrorFileType == "valid"
                    ? "validFileLi"
                    : ""
                }
              >
                File type must be .mp3
              </li>
              <li className={validationErrorFileSize ? "invalidFileLi" : ""}>
                File size must be less than {filesize(30000000)}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
