import { firebase_storage } from "@/utility_functions/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore";

export const uploadGifhovFile = async (userUid, file) => {
  const storage = firebase_storage;
  const metadata = {};
  const storageRef = ref(storage, "users/anonymousGuest/" + file.name);
  const uploadTask = await uploadBytesResumable(storageRef, file, metadata);
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
};
