export function VolumeEnabledIcon(props: { audioEnabled: boolean }) {
  return (
    <>
      <div className="_padding--1rem _text-align--right">
        <i
          className={
            "fa-solid _font-size--2rem " +
            (props.audioEnabled ? "fa-volume" : "fa-volume-xmark")
          }
        ></i>
      </div>
    </>
  );
}
