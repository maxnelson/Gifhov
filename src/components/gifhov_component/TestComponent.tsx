import { useRef } from "react";
import { GifhovMetadata } from "@/components/gifhov_component/GifhovMetadata";
import { GifhovComponentPropsType } from "@/utility_functions/typescript/types";

export function TestComponent(props: GifhovComponentPropsType) {
  const testVar = "testVar";
  return (
    <>
      <div>
        <p>hello world test</p>
        <div
          className={
            "link_option _display--inline-block _cursor--pointer " +
            (testVar ? "link_option_active" : "")
          }
        ></div>
      </div>
    </>
  );
}
