import { FC, MouseEvent, ReactNode } from "react";
import { Transition } from "react-transition-group";
import { useRef } from "react";
import { Icon } from "../../Icon";

interface ModalProps {
  children: ReactNode;
  inProp: boolean;
  title: string;
  onClose: () => void;
}

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Modal: FC<ModalProps> = ({ children, inProp, title, onClose }) => {
  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit={true}>
      {(state) => (
        <div
          onClick={onClose}
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className="fixed overflow-y-auto overflow-x-hidden inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              className="relative bg-white rounded-lg dark:bg-gray-700"
            >
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <Icon name="sprite/close" className="w-8 h-8 fill-current" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};
