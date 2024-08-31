export function ClickDisclaimer(props: { audioEnabled: boolean }) {
  return (
    <>
      <div className="click_disclaimer _text-align--center _margin-top--6rem">
        <i
          className={
            "fa-solid _font-size--2rem _margin-bottom--1rem " +
            (props.audioEnabled ? "fa-volume" : "fa-volume-xmark")
          }
        ></i>
        {!props.audioEnabled ? (
          <p>
            Chrome disables audio from playing on new web pages by default
            <br />
            Click anywhere on the page to enable audio
          </p>
        ) : (
          <>
            <p className="">audio enabled</p>
          </>
        )}
      </div>
    </>
  );
}
