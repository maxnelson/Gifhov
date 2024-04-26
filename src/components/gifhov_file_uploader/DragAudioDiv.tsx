import { useState } from "react";
export function DragAudioDiv() {
  const [draggedOver, setDraggedOver] = useState("");

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("file dropped");
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("dragging over");
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items[0].type === "image/gif") {
      setDraggedOver("valid");
      return;
    } else {
      setDraggedOver("invalid");
    }
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("dragging leave");
  };

  return (
    <>
      <div
        className={
          draggedOver === "valid"
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
        <p>drag audio</p>
      </div>
    </>
  );
}
