import { FC } from "react";

interface ProfileAvatarProps {
  photoURL: string;
}

export const ProfileAvatar: FC<ProfileAvatarProps> = ({ photoURL }) => {return (
    <div className="relative w-28 h-28 rounded-lg overflow-hidden cursor-pointer">
      <img src={photoURL} alt="avatar" className="block w-full h-full object-cover" />
    </div>
  );
};
