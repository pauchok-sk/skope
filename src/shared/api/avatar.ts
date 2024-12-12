import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function changeAvatar(id: string, data: ArrayBuffer | string) {
  await setDoc(doc(db, "avatars", id), {
    data,
  });
}

export async function getAvatar(id: string): Promise<string> {
  const avatar = await getDoc(doc(db, "avatars", id));
  if (avatar.exists()) {
    return avatar.data().data;
  } else {
    return "";
  }
}