import { Route, Routes } from "react-router-dom";
import { routeConfig, routeConfigAuth } from "../../../../shared/config/route";
import { useAppSelector } from "../../../../shared/helpers/hooks/reducerHooks";

export const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <Routes>
      {isAuth
        ? Object.values(routeConfigAuth).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        : Object.values(routeConfig).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
    </Routes>
  );
};
