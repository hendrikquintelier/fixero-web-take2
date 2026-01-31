import type { RouteObject } from "react-router-dom";
import { PublicLayout } from "../layout/PublicLayout";
import { LandingPage } from "../../pages/public/Landing/LandingPage";
import { InterestPage } from "../../pages/public/Interest/InterestPage"; // ✅ voeg toe

export const publicRoutes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/interesse", element: <InterestPage /> } // ✅ voeg toe
      // later: /privacy, /terms
    ],
  },
];
