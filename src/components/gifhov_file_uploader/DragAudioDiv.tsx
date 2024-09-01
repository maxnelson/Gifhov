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
            <i className="fa-regular fa-circle-check _color--var_--green-100_"></i>
          ) : (
            <div className="_pointer-events--none  _margin-top--3rem">
              <p className="_text-align--center">
                <i className="fa-solid fa-file-music _font-size--2rem"></i>
              </p>
              <p
                className={
                  "_margin-top--1rem " +
                  (mouseEntered
                    ? "_visibility--visible"
                    : "_visibility--hidden")
                }
              >
                drag audio file
              </p>
            </div>
          )}
        </div>
        {fileDropped && (
          <div className="_position--absolute _padding--1rem _display--flex _width--16rem">
            <div className="_display--inline-block">
              <p>
                <i className="fa-regular fa-file _font-size--2rem"></i>
              </p>
            </div>
            <div className="_display--inline-block _margin-left--1rem _width--fill-available">
              <p className="_word-wrap--break-word">{fileName}</p>
              <p className="_font-size--14px">{fileSize}</p>
            </div>
            <div className="_display--inline-block _margin-left--auto">
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
              "_position--absolute _margin-top--1rem " +
              (mouseEntered ? "_visibility--visible" : "_visibility--hidden")
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
