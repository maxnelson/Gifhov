import { Header } from "@/components/Header";
import { fetchAllGifhovs } from "@/utility_functions/database_operations/gifhovs/fetchAllGifhovs";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { GifhovComponent } from "@/components/gifhov_component/GifhovComponent";
import { VolumeEnabledIcon } from "@/components/page_components/VolumeEnabledIcon";
import { DocumentData } from "firebase/firestore";
import { GifhovComponentObjectType } from "@/utility_functions/typescript/types";

export function BrowsePage() {
  const [gifhovObject, setGifhovObject] = useState<DocumentData | undefined>(
    undefined
  );
  const [audioEnabled, setAudioEnabled] = useState(false);
  document.onmousedown = () => {
    setAudioEnabled(true);
  };
  useEffect(() => {
    const fetchGifhovObject = async () => {
      const gifhovObjectDocument = await fetchAllGifhovs("anonymousGuest");
      setGifhovObject(gifhovObjectDocument);
    };
    fetchGifhovObject();
  }, []);

  return (
    <>
      <Header />
      <VolumeEnabledIcon audioEnabled={audioEnabled} />
      {gifhovObject && (
        <div className="display-flex flex-direction-column align-items-center">
          {gifhovObject.map((gifhov: GifhovComponentObjectType) => (
            <div key={gifhov.id}>
              <GifhovComponent
                gifURL={gifhov.gifURL}
                audioURL={gifhov.audioURL}
                ownerID={"anonymousGuest"}
                gifhovID={gifhov.id}
              />
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
