import { useState } from "react";

export function LinkOptionsContainer(ownerID: string, gifhovID: string) {
  const [linkOptionLinkActive, setLinkOptionLinkActive] = useState(true);
  const [linkOptionEmbedActive, setLinkOptionEmbedActive] = useState(false);

  const handleLinkOptionLinkClick = () => {
    setLinkOptionLinkActive(true);
    setLinkOptionEmbedActive(false);
  };
  const handleLinkOptionEmbedClick = () => {
    setLinkOptionLinkActive(false);
    setLinkOptionEmbedActive(true);
  };

  const handleChange = (event) => {};

  return (
    <>
      <div className="link_options_container position-absolute width-100p">
        <div className="link_options_labels">
          <div
            className={
              "link_option display-inline-block cursor-pointer " +
              (linkOptionLinkActive ? "link_option_active" : "")
            }
            onClick={handleLinkOptionLinkClick}
          >
            <p>Link</p>
          </div>
          <div
            className={
              "link_option display-inline-block cursor-pointer " +
              (linkOptionEmbedActive ? "link_option_active" : "")
            }
            onClick={handleLinkOptionEmbedClick}
          >
            <p>Embed</p>
          </div>
          <div>
            <input
              className="border-1px-solid-ddd padding-10px width-100p"
              value={
                linkOptionLinkActive
                  ? window.location.origin +
                    "/user/" +
                    ownerID +
                    "/gifhov/" +
                    gifhovID
                  : "<iframe scrolling='no'frameborder='0'src=" +
                    window.location.origin +
                    "/user/" +
                    ownerID +
                    "/embed/" +
                    gifhovID +
                    "'height='None'width='None'></iframe>"
              }
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
