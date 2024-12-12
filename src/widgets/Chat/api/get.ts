import { getMessages } from "../../../shared/api";
import { IMessage } from "../../../shared/types";

type TypeGetMessages = {
  setIsLoading?: (bool: boolean) => void;
  setMessage: (messages: IMessage[]) => void;
}

export async function get({setIsLoading, setMessage}: TypeGetMessages) {
  if (setIsLoading) setIsLoading(true);
  const messagesQ = await getMessages();
  setMessage(messagesQ);
  if (setIsLoading) setIsLoading(false);
}

export async function getOffset({setMessage}: TypeGetMessages) {
  setInterval(async () => {
    const messagesQ = await getMessages();
    setMessage(messagesQ);
  }, 5000)
}