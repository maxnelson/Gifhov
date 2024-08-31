import { useState } from "react";
import { filesize } from "filesize";
import { uploadGifhov } from "@/utility_functions/uploadGifhov";

export function DragAudioDiv(props) {
  const [draggedOver, setDraggedOver] = useState("");
  const [validationErrorFileType, setValidationErrorFileType] = useState("");
  const [validationErrorFileSize, setValidationErrorFileSize] = useState(false);
  const [fileDropped, setFileDropped] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [mouseEntered, setMouseEntered] = useState(false);

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

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
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
      props.setAudioFileUpload(() => {
        droppedFile;
      });
    }

    if (props.gifFileUpload?.size > 0) {
      const uploadID = await uploadGifhov(
        "anonymousGuest",
        props.gifFileUpload,
        droppedFile
      );
      window.location = "/user/anonymousGuest/gifhov/" + uploadID;
    }
  };

  const clearFileUploadHandler = () => {
    props.setAudioFileUpload(null);
    setFileDropped(false);
    setFileName("");
    setFileSize("");
    setValidationErrorFileType("");
    setValidationErrorFileSize(false);
    setDraggedOver("");
  };

  return (
    <>
      <div className="fileUploadINputDivContainer">
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
          onMouseEnter={(e) => setMouseEntered(!mouseEntered)}
          onMouseLeave={(e) => setMouseEntered(!mouseEntered)}
        >
          {fileDropped ? (
            <i className="fa-regular fa-circle-check color-green font-size-1rem"></i>
          ) : (
            <div className="pointer-events-none margin-top-3rem">
              <p className="text-align-center">
                <i className="fa-solid fa-file-music font-size-2rem"></i>
              </p>
              <p
                className={
                  "margin-top-1rem " +
                  (mouseEntered ? "visibility-visible" : "visibility-hidden")
                }
              >
                drag audio file
              </p>
            </div>
          )}
        </div>
        {fileDropped && (
          <div className="position-absolute padding-1rem display-flex width-16rem">
            <div className="_display--inline-block">
              <p>
                <i className="fa-regular fa-file font-size-2rem"></i>
              </p>
            </div>
            <div className="_display--inline-block margin-left-1rem width-fill-available">
              <p className="word-wrap-break-word">{fileName}</p>
              <p className="font-size-14px">{fileSize}</p>
            </div>
            <div className="_display--inline-block margin-left-auto">
              <i
                className="fa-solid fa-circle-xmark _cursor--pointer"
                onClick={clearFileUploadHandler}
              ></i>
            </div>
          </div>
        )}

        {!fileDropped && (
          <div
            className={
              "position-absolute margin-top-1rem " +
              (mouseEntered ? "visibility-visible" : "visibility-hidden")
            }
          >
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
