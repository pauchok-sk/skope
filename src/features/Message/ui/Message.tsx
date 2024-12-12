import clsx from "clsx";
import { FC, memo } from "react";
import { IMessage } from "../../../shared/types";

interface MessageProps {
  reverse?: boolean;
  message: IMessage;
}

export const Message: FC<MessageProps> = memo(({ reverse, message }) => {
  return (
    <div className={clsx("flex items-start gap-2.5", { "flex-row-reverse": reverse })}>
      <img className="w-8 h-8 rounded-full" src={message.photoURL} alt={message.displayName} />
      <div
        className={clsx(
          "flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700",
          { "rounded-e-xl rounded-es-xl": !reverse, "rounded-s-xl rounded-ee-xl": reverse }
        )}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {message.displayName}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {message.createdAt.seconds}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {message.message}
        </p>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
    </div>
  );
});
