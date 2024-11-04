import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/router/interface";
import MainLayout from "@/layout/MainLayout/index";
import lazyLoad from "@/router/utils/lazyLoad";

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/game_on" replace />,
      },
      {
        path: "/game_on",
        element: lazyLoad(lazy(() => import("@/pages/gameOn/index"))),
      },
      {
        path: "/zin",
        element: lazyLoad(lazy(() => import("@/pages/zin/index"))),
      },
      {
        path: "/mission",
        element: lazyLoad(lazy(() => import("@/pages/mission/index"))),
      },
    ],
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
