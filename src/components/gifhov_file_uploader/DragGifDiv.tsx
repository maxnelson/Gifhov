import { useState } from "react";
import { filesize } from "filesize";
import { uploadGifhov } from "@/utility_functions/uploadGifhov";

export function DragGifDiv(props) {
  const [draggedOver, setDraggedOver] = useState("");
  const [mouseEntered, setMouseEntered] = useState(false);
  const [validationErrorFileType, setValidationErrorFileType] = useState("");
  const [validationErrorFileSize, setValidationErrorFileSize] = useState(false);
  const [fileDropped, setFileDropped] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items[0].type === "image/gif") {
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
    if (e.dataTransfer.items[0].type !== "image/gif") {
      setValidationErrorFileType("invalid");
    }
    if (droppedFile.size > 5242880) {
      setValidationErrorFileSize(true);
    }
    if (
      e.dataTransfer.items[0].type == "image/gif" &&
      droppedFile.size < 5242880
    ) {
      setFileDropped(true);
      setFileName(droppedFile.name);
      setFileSize(filesize(droppedFile.size));
      props.setGifFileUpload(droppedFile);
    }
    if (props.gifFileUpload?.size > 0) {
      const uploadID = await uploadGifhov(
        "anonymousGuest",
        droppedFile,
        props.audioFileUpload
      );
      window.location = "/user/anonymousGuest/gifhov/" + uploadID;
    }
  };

  const handleMouseEnter = () => {
    setMouseEntered(true);
  };

  const clearFileUploadHandler = () => {
    props.setGifFileUpload({});
    setFileDropped(false);
    setFileName("");
    setFileSize(0);
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
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={() => setMouseEntered(false)}
        >
          {fileDropped ? (
            <i className="fa-regular fa-circle-check color-green font-size-1rem"></i>
          ) : (
            <div className="pointer-events-none">
              <p className="text-align-center">
                <i className="fa-regular fa-image dragAndDropIcon"></i>
              </p>
              <p
                className={
                  "margin-top-1rem " +
                  (mouseEntered ? "visibility-visible" : "visibility-hidden")
                }
              >
                drag gif file
              </p>
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
          <div
            className={
              "margin-top-1rem " +
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
                File type must be .gif
              </li>
              <li className={validationErrorFileSize ? "invalidFileLi" : ""}>
                File size must be less than {filesize(5242880)}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
