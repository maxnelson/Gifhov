import { firestore_database } from "@/utility_functions/firebaseConfig";
import { doc, collection, getDoc } from "firebase/firestore";

export const fetchGifhov = async (ownerID, gifhovID) => {
  const gifhovDocument = doc(
    collection(
      doc(collection(firestore_database, "users"), ownerID),
      "gifhovs"
    ),
    gifhovID
  );
  const gifhovDocumentObject = await getDoc(gifhovDocument);
  return gifhovDocumentObject.data();
};
