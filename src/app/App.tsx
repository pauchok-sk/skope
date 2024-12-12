import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../shared/config/firebase";
import { useAppDispatch, useAppSelector } from "../shared/helpers/hooks/reducerHooks";
import { userSlice } from "../store/reducers/userSlice";
import { Loader } from "../shared/ui/Loader";

function App() {
  const dispatch = useAppDispatch();
  const { setUser, clearUser } = userSlice.actions;
  const { isLoading } = useAppSelector((state) => state.user);

  useEffect(() => {
    // авторизован ли пользователь
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(setUser(user));
      else dispatch(clearUser());
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <div className="text-white dark:bg-bg h-screen flex flex-col">
            <AppRouter />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default App;
