import { Header } from "@/components/Header";
import { GifhovComponent } from "@/components/gifhov_component/GifhovComponent";
import { ClickDisclaimer } from "@/components/gifhov_file_uploader/ClickDisclaimer";
import { Footer } from "@/components/Footer";
import { fetchGifhov } from "@/utility_functions/database_operations/gifhovs/fetchGifhov";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface GifHovObjectType {
  gifURL: string;
  audioURL: string;
}

export function GifhovPage() {
  const { ownerID, gifhovID } = useParams<{
    ownerID: string;
    gifhovID: string;
  }>();
  const [gifHovObject, setGifHovObject] = useState<
    GifHovObjectType | undefined
  >(undefined);

  useEffect(() => {
    const fetchGifhovObject = async () => {
      const gifhovObject = await fetchGifhov(ownerID ?? "", gifhovID ?? "");
      setGifHovObject(gifhovObject as GifHovObjectType);
    };
    fetchGifhovObject();
  }, []);
  console.log(gifHovObject);

  return (
    <>
      <Header />
      <div className="gifhov_page_container">
        {gifHovObject && (
          <GifhovComponent
            gifURL={gifHovObject.gifURL}
            audioURL={gifHovObject.audioURL}
          />
        )}
      </div>
      <ClickDisclaimer />
      <Footer />
    </>
  );
}
