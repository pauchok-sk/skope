import { useAppDispatch, useAppSelector } from "../../../shared/helpers/hooks/reducerHooks";
import { Button } from "../../../shared/ui/Button";
import { userSlice } from "../../../store/reducers/userSlice";
import ProfileButton from "./ProfileButton";
import { logoutUser } from "../../../shared/api/user";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { clearUser } = userSlice.actions;
  const stateUser = useAppSelector((state) => state.user.user);

  const logout = async () => {
    logoutUser(() => {
      dispatch(clearUser());
    });
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Scope
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {stateUser && <ProfileButton imageSrc={stateUser.photoURL || ""} />}
          <Button onClick={logout}>Выйти</Button>
        </div>
      </div>
    </nav>
  );
};
