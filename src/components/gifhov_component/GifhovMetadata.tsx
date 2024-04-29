import { LinkOptionsContainer } from "@/components/gifhov_component/LinkOptionsContainer";

export function GifhovMetadata() {
  return (
    <>
      <div className="">
        <div className="display-flex justify-content-space-between margin-top-1rem">
          <div className="gifhov_metadata">
            <p className="font-size-12px">by AnonymousGuest</p>
            <p className="font-size-12px">January 7th</p>
          </div>
          <div className="share_icon_container">
            <img
              src="/public/images/user_interface/general/reblog_icon.jpg"
              className="opacity-0-3 width-1-5rem cursor-pointer reblog-icon"
            />
          </div>
        </div>
        <LinkOptionsContainer />
      </div>
    </>
  );
}
