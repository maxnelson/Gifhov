import { useState, useRef } from "react";

export function LinkOptionsContainer(props) {
  return (
    <>
      <div className="link_options_container">
        <div className="link_options_labels">
          <div className="link_option display-inline-block">
            <p>Link</p>
          </div>
          <div className="link_option display-inline-block link_option_active">
            <p>Embed</p>
          </div>
          <div>
            <input className="border-1px-solid-ddd padding-10px width-100p"></input>
          </div>
        </div>
      </div>
    </>
  );
}
