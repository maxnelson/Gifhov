import { useState } from "react";

export function LinkOptionsContainer(props) {
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
      <div className="link_options_container _position--absolute _width--100percent">
        <div className="link_options_labels">
          <div
            className={
              "link_option _display--inline-block _cursor--pointer " +
              (linkOptionLinkActive ? "link_option_active" : "")
            }
            onClick={handleLinkOptionLinkClick}
          >
            <p>Link</p>
          </div>
          <div
            className={
              "link_option _display--inline-block _cursor--pointer " +
              (linkOptionEmbedActive ? "link_option_active" : "")
            }
            onClick={handleLinkOptionEmbedClick}
          >
            <p>Embed</p>
          </div>
          <div>
            <div className="border-1px-solid-ddd _padding--10px _width--100percent">
              <p>
                {linkOptionLinkActive
                  ? window.location.origin +
                    "/user/" +
                    props.ownerID +
                    "/gifhov/" +
                    props.gifhovID
                  : "<iframe scrolling='no'frameborder='0'src=" +
                    window.location.origin +
                    "/user/" +
                    props.ownerID +
                    "/embed/" +
                    props.gifhovID +
                    "'height='None'width='None'></iframe>"}
              </p>
            </div>

            <input
              className="border-1px-solid-ddd _padding--10px _width--100percent"
              value={
                linkOptionLinkActive
                  ? window.location.origin +
                    "/user/" +
                    props.ownerID +
                    "/gifhov/" +
                    props.gifhovID
                  : "<iframe scrolling='no'frameborder='0'src=" +
                    window.location.origin +
                    "/user/" +
                    props.ownerID +
                    "/embed/" +
                    props.gifhovID +
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
