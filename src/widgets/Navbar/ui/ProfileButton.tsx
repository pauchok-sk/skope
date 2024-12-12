import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutesAuth } from "../../../shared/config/route";

interface ProfileButtonProps {
  imageSrc: string;
}

const ProfileButton: FC<ProfileButtonProps> = ({imageSrc}) => {
  return (
    <Link to={AppRoutesAuth.PROFILE}>
      <img src={imageSrc} className="w-10 h-10 rounded-full object-cover" />
    </Link>
  );
};

export default ProfileButton;