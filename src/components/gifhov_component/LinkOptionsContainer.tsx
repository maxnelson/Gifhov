import { useState, useRef } from "react";

export function LinkOptionsContainer(props) {
  const linkTextRef = useRef(null);
  const copyIconRef = useRef(null);
  const copyLinkTooltipRef = useRef(null);
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

  const copyLink = async (event) => {
    await navigator.clipboard.writeText(linkTextRef.current.textContent);
    copyIconRef.current.className =
      "fa-solid fa-check _color--var_--green-100_";
    copyLinkTooltipRef.current.classList.add("show");
    setTimeout(() => {
      copyIconRef.current.className = "fa-solid fa-copy";
      copyLinkTooltipRef.current.classList.remove("show");
    }, 2500);
  };

  return (
    <>
      <div className="link_options_container _position--absolute _width--100percent">
        <div className="_position--relative">
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
          <div ref={copyLinkTooltipRef} className="copyLinkTooltip">
            Copied!
          </div>
          <div className="_border--1px_solid_var_--gray-500_ _width--100percent _border-radius--4px _border-top-left-radius--0 _display--flex _align-items--center">
            <p
              ref={linkTextRef}
              className="_flex--1 _margin--0 _overflow-x--scroll _white-space--nowrap _padding--10px"
            >
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
            <div
              className="_display--inline-block _margin-left--10px _cursor--pointer _border-left--1px_solid_var_--gray-500_ _padding--10px _border-top-right-radius--4px _border-bottom-right-radius--4px _background-color--var_--gray-150_"
              onClick={copyLink}
            >
              <i ref={copyIconRef} className="fa-solid fa-copy"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
