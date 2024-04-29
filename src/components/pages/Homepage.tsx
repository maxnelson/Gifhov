import { Header } from "@/components/Header";
import { GifhovFileUploaderContainer } from "@/components/gifhov_file_uploader/GifhovFileUploaderContainer";
import { fetchGifhov } from "@/utility_functions/database_operations/gifhovs/fetchGifhov";
import { ClickDisclaimer } from "@/components/page_components/ClickDisclaimer";
import { VolumeEnabledIcon } from "@/components/page_components/VolumeEnabledIcon";

import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

export function Homepage() {
  const [gifhovObject, setGifhovObject] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  document.onmousedown = () => {
    setAudioEnabled(true);
    console.log("audio enabled");
  };

  useEffect(() => {
    const fetchGifhovObject = async () => {
      const gifhovObjectDocument = await fetchGifhov(
        "anonymousGuest",
        "NwXG47nDNVNlxJTteoMw"
      );
      setGifhovObject(gifhovObjectDocument);
    };
    fetchGifhovObject();
  }, []);

  return (
    <>
      <div>
        <Header />
        <VolumeEnabledIcon audioEnabled={audioEnabled} />
        {gifhovObject && (
          <GifhovFileUploaderContainer
            ownerID="anonymousGuest"
            gifhovID="QPE0PNx0MRU9wPEhve0Z"
            gifURL={gifhovObject.gifURL}
            audioURL={gifhovObject.audioURL}
          />
        )}
        <ClickDisclaimer audioEnabled={audioEnabled} />
        <Footer />
      </div>
    </>
  );
}
