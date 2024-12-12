import { useAppSelector } from "../../../shared/helpers/hooks/reducerHooks";
import { ChangeAvatar } from "./ChangeAvatar";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileName } from "./ProfileName";

export const ProfileHeader = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="flex gap-4">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex gap-4">
          <ProfileAvatar photoURL={user?.photoURL || ""} />
          <div>
            <ProfileName />
            <span className="dark:text-slate-500 text-slate-950 block">Email:</span>
            <a href={`mailto:${user?.email}`}>{user?.email}</a>
          </div>
        </div>
        <ChangeAvatar>
          
        </ChangeAvatar>
      </div>
    </div>
  );
};
