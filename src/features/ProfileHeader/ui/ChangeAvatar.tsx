import { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import { ModalAvatar } from "./ModalAvatar";

export const ChangeAvatar = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <div className="mt-4">
      <Button onClick={() => setIsVisibleModal(true)}>Сменить изображение профиля</Button>
      <ModalAvatar inProp={isVisibleModal} onClose={() => setIsVisibleModal(false)} />
    </div>
  );
};
