import { FC, useRef } from "react";
import { Button } from "../../../shared/ui/Button";
import { Input } from "../../../shared/ui/Input";
import { Modal } from "../../../shared/ui/Modal";
import { updateUser } from "../../../shared/api/user";
import { useAppDispatch, useAppSelector } from "../../../shared/helpers/hooks/reducerHooks";
import { userSlice } from "../../../store/reducers/userSlice";

interface ModalAvatarProps {
  inProp: boolean;
  onClose: () => void;
}

export const ModalAvatar: FC<ModalAvatarProps> = ({ inProp, onClose }) => {
  const { user } = useAppSelector((state) => state.user);
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const updatePhoto = async () => {
    if (user && inputRef.current) {
      const photoURL = inputRef.current.value;

      await updateUser(user, {
        ...user,
        photoURL,
      }).then(() => {
        if (inputRef.current) inputRef.current.value = "";
        dispatch(setUser({ ...user, photoURL }));

        onClose();
      });
    }
  };

  return (
    <Modal inProp={inProp} title="Изображение профиля" onClose={onClose}>
      <div className="py-4 px-8">
        <Input ref={inputRef} placeholder="URL изображения" type="text" />
        <Button onClick={updatePhoto} className="mt-4 w-full">
          Сохранить
        </Button>
      </div>
    </Modal>
  );
};
