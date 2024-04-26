import { useState, useRef } from "react";

export function ClickDisclaimer() {
  return (
    <>
      <div className="click_disclaimer">
        <p>
          Your browser requires a document interaction to play audio, click
          anywhere on the screen, and then hover over the image to hear audio.
        </p>
      </div>
    </>
  );
}
