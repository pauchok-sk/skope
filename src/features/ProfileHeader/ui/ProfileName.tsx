import { ChangeEvent, useRef, useState } from "react";
import { useAppSelector } from "../../../shared/helpers/hooks/reducerHooks";
import { Button } from "../../../shared/ui/Button";
import { Icon } from "../../../shared/ui/Icon";
import clsx from "clsx";
import { updateUser } from "../../../shared/api/user";

export const ProfileName = () => {
  const { user } = useAppSelector((state) => state.user);

  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState(user?.displayName || "");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeVisibleInput = () => {
    setIsDisabled(!isDisabled);

    if (inputRef.current) setTimeout(() => inputRef.current?.focus(), 0);
  };

  const changeName = async () => {
    if (user) {
      await updateUser(user, {
        ...user,
        displayName: name,
      }).then(() => {
        setIsDisabled(true);
      });
    }
  };

  return (
    <div className="group flex items-center gap-4">
      <input
        ref={inputRef}
        type="text"
        className="text-2xl font-medium mb-3 bg-inherit border-none outline-none"
        disabled={isDisabled}
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <div className="flex items-center gap-4">
        <button className="invisible group-hover:visible" onClick={changeVisibleInput}>
          <Icon name="sprite/pen" className="w-5 h-5 fill-white" />
        </button>
        <Button
          onClick={changeName}
          className={clsx("w-10 h-10 flex items-center justify-center text-white px-0", {
            invisible: isDisabled,
          })}
        >
          Ok
        </Button>
      </div>
    </div>
  );
};
