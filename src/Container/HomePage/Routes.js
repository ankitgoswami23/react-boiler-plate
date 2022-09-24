import { lazy } from "react";

import appRoutes from "../../appRoutes";

const HomePage = lazy(() => import("./Pages/HomePage"));

const homePageRoutes = [
  {
    path: appRoutes.homePageRoutes.homePageRoutes,
    exact: true,
    name: "HomePage",
    component: HomePage,
    private: false,
  },
];

export default homePageRoutes;
