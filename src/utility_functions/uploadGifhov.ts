import { firestore_database } from "@/utility_functions/firebaseConfig";
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { uploadGifhovFile } from "@/utility_functions/uploadGifhovFile";

interface uploadGifhovProps {
  userUid: string;
  file1: File;
  file2: File;
}

export const uploadGifhov = async ({
  userUid,
  file1,
  file2,
}: uploadGifhovProps) => {
  debugger;
  const gifFileURL = await uploadGifhovFile(file1);
  const audioFileURL = await uploadGifhovFile(file2);
  const new_firestore_object = {
    gifURL: gifFileURL,
    audioURL: audioFileURL,
    lastUpdated: serverTimestamp(),
  };
  const new_firestore_record = await addDoc(
    collection(
      doc(collection(firestore_database, "users"), userUid),
      "gifhovs"
    ),
    new_firestore_object
  );
  console.log(new_firestore_record.id);
  //redirect to new gifhov page
};
