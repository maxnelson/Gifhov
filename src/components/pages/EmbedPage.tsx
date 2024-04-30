import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGifhov } from "@/utility_functions/database_operations/gifhovs/fetchGifhov";
import { DocumentData } from "firebase/firestore";

export function EmbedPage() {
  const { ownerID, gifhovID } = useParams<{
    ownerID: string;
    gifhovID: string;
  }>();
  const [gifhovObject, setGifhovObject] = useState<DocumentData | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchGifhovObject = async () => {
      const gifhovObjectDocument = await fetchGifhov(
        ownerID ?? "",
        gifhovID ?? ""
      );
      setGifhovObject(gifhovObjectDocument);
    };
    fetchGifhovObject();
  }, []);

  return (
    <>
      {gifhovObject && (
        <img className="embeddedImage" src={gifhovObject.gifURL} />
      )}
    </>
  );
}
