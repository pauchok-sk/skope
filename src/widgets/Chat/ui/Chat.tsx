import { useEffect, useState } from "react";
import { Message } from "../../../features/Message";
import { MessageSend } from "./MessageSend";
import { IMessage } from "../../../shared/types";
import { useAppSelector } from "../../../shared/helpers/hooks/reducerHooks";
import { get, getOffset } from "../api/get";
import { Loader } from "../../../shared/ui/Loader";

export const Chat = () => {
  const [messages, setMessage] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    get({ setIsLoading, setMessage });
    getOffset({ setMessage });
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col gap-3 p-4 flex-1 overflow-y-auto relative">
        {isLoading ? (
          <Loader />
        ) : (
          messages.map((m, i) => <Message key={i} message={m} reverse={user?.uid === m.uid} />)
        )}
      </div>
      <MessageSend onSend={() => get({ setIsLoading, setMessage })} />
    </div>
  );
};
