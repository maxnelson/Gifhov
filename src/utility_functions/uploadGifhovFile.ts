import { firebase_storage } from "@/utility_functions/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface uploadGifhovFileProps {
  file: File;
}

export const uploadGifhovFile = async (file) => {
  debugger;
  const storage = firebase_storage;
  const metadata = {};
  const storageRef = ref(storage, "users/anonymousGuest/" + file.name);
  const uploadTask = await uploadBytesResumable(storageRef, file, metadata);
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
};
