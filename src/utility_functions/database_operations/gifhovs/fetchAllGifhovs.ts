import { firestore_database } from "@/utility_functions/firebaseConfig";
import { Firestore, doc, collection, getDocs } from "firebase/firestore";

export interface fetchGifhovProps {
  ownerID: string;
}

export const fetchAllGifhovs = async (ownerID: string) => {
  const gifhovDocument = collection(
    doc(collection(firestore_database as Firestore, "users"), ownerID),
    "gifhovs"
  );
  const gifhovDocumentObject = await getDocs(gifhovDocument);

  const returnObject = [];
  for (const doc of gifhovDocumentObject.docs) {
    const returnItem = doc.data();
    returnItem.id = doc.id;
    returnObject.push(returnItem);
  }

  return returnObject;
};
