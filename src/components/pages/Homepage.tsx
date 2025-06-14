import { Header } from "@/components/Header";
import { GifhovFileUploaderContainer } from "@/components/gifhov_file_uploader/GifhovFileUploaderContainer";
import { fetchGifhov } from "@/utility_functions/database_operations/gifhovs/fetchGifhov";
import { ClickDisclaimer } from "@/components/page_components/ClickDisclaimer";
import { VolumeEnabledIcon } from "@/components/page_components/VolumeEnabledIcon";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";

export function Homepage(props) {
  const [gifhovObject, setGifhovObject] = useState<DocumentData | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchGifhovObject = async () => {
      const gifhovObjectDocument = await fetchGifhov(
        "anonymousGuest",
        "homepage_gifhov"
      );
      setGifhovObject(gifhovObjectDocument);
    };
    fetchGifhovObject();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="_width--90percent _margin--0_auto">
          <VolumeEnabledIcon audioEnabled={props.audioEnabled} />
          {gifhovObject && (
            <GifhovFileUploaderContainer
              ownerID="anonymousGuest"
              gifhovID="QPE0PNx0MRU9wPEhve0Z"
              gifURL={gifhovObject.gifURL}
              audioURL={gifhovObject.audioURL}
            />
          )}
          <ClickDisclaimer audioEnabled={props.audioEnabled} />
        </div>
        <Footer />
      </div>
    </>
  );
}
