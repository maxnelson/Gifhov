import { firestore_database } from "@/utility_functions/firebaseConfig";
import { Firestore, doc, collection, getDoc } from "firebase/firestore";

export interface fetchGifhovProps {
  ownerID: string;
  gifhovID: string;
}

export const fetchGifhov = async (ownerID: string, gifhovID: string) => {
  const gifhovDocument = doc(
    collection(
      doc(collection(firestore_database as Firestore, "users"), ownerID),
      "gifhovs"
    ),
    gifhovID
  );
  const gifhovDocumentObject = await getDoc(gifhovDocument);
  return gifhovDocumentObject.data();
};
