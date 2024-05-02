import { LinkOptionsContainer } from "@/components/gifhov_component/LinkOptionsContainer";
import { useState } from "react";
import { GifhovMetadataPropsType } from "@/utility_functions/typescript/types";

export function GifhovMetadata(props: GifhovMetadataPropsType) {
  const [reblogActive, setReblogActive] = useState<boolean>(false);
  const handleClick = () => {
    setReblogActive(!reblogActive);
  };
  return (
    <>
      <div className="">
        <div className="display-flex justify-content-space-between">
          <div className="gifhov_metadata">
            <p className="font-size-12px">by AnonymousGuest</p>
            <p className="font-size-12px">January 7th</p>
          </div>
          <div className="share_icon_container" onClick={handleClick}>
            <img
              src="/images/user_interface/general/reblog_icon.jpg"
              className="opacity-0-3 width-1-5rem cursor-pointer reblog-icon"
            />
          </div>
        </div>
        {reblogActive && (
          <LinkOptionsContainer
            ownerID={props.ownerID}
            gifhovID={props.gifhovID}
          />
        )}
      </div>
    </>
  );
}
