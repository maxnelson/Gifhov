import { useState, useRef } from "react";

export function ClickDisclaimer() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const clickHandler = () => {
    setAudioEnabled(!audioEnabled);
  };
  return (
    <>
      <div
        className="click_disclaimer text-align-center margin-top-2rem"
        onClick={clickHandler}
      >
        {!audioEnabled ? (
          <>
            <i className="fa-solid fa-volume-off font-size-2rem margin-bottom-1rem"></i>
            <p>Click to enable audio</p>
          </>
        ) : (
          <>
            <i className="fa-solid fa-volume color-green font-size-2rem margin-bottom-1rem"></i>
            <p className="color-green">audio enabled</p>
          </>
        )}
      </div>
    </>
  );
}
