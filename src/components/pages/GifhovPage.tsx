import { Header } from "@/components/Header";
import { GifhovComponent } from "@/components/gifhov_component/GifhovComponent";
import { ClickDisclaimer } from "@/components/page_components/ClickDisclaimer";

import { Footer } from "@/components/Footer";
import { fetchGifhov } from "@/utility_functions/database_operations/gifhovs/fetchGifhov";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";

export function GifhovPage() {
  const { ownerID, gifhovID } = useParams<{
    ownerID: string;
    gifhovID: string;
  }>();
  const [gifHovObject, setGifHovObject] = useState<DocumentData | undefined>(
    undefined
  );
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  document.onmousedown = () => {
    setAudioEnabled(true);
  };

  useEffect(() => {
    const fetchGifhovObject = async () => {
      const gifhovObject = await fetchGifhov(ownerID ?? "", gifhovID ?? "");
      setGifHovObject(gifhovObject);
    };
    fetchGifhovObject();
  }, []);

  return (
    <>
      <Header />
      <div className="_display--flex _justify-content--center _margin-top--4rem">
        {gifHovObject && (
          <GifhovComponent
            gifURL={gifHovObject.gifURL}
            audioURL={gifHovObject.audioURL}
            ownerID={ownerID}
            gifhovID={gifhovID}
          />
        )}
      </div>
      <ClickDisclaimer audioEnabled={audioEnabled} />
      <Footer />
    </>
  );
}
