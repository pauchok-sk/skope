import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { IMessage } from "../types";
import { db } from "../config/firebase";

export async function getMessages() {
  const messagesCollection = collection(db, "messages");
  const q = query(messagesCollection, orderBy("createdAt"));
  const messages: IMessage[] = [];

  const queryMessages = await getDocs(q);
  queryMessages.forEach((doc) => {
    const currentMessage = doc.data() as IMessage;

    messages.push(currentMessage);
  });

  return messages;
}

export async function getMessageSend(id: string): Promise<IMessage | null> {
  const docRef = doc(db, "messages", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as IMessage;
  } else {
    return null;
  }
}

export async function getMessagesUpdated() {
  const messagesCollection = collection(db, "messages");
  const q = query(messagesCollection, orderBy("createdAt"));
  await onSnapshot(q, (querySnapshot) => {
    const messages: IMessage[] = [];
    querySnapshot.docChanges().forEach((doc) => {
      if (doc.type === "added") {
        const dataMessage = doc.doc.data() as IMessage;
        messages.push(dataMessage);
      }
    });
    console.log("Current cities in CA: ", messages);
  });
}
