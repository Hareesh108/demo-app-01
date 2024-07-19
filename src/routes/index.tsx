import React, { Suspense, lazy, ElementType } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "../components/Loader";
import { DOMAIN_PATHS } from "./paths";
import OutletSteps from "../domains/dashboard/pages/OutletPage";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const SectionA = Loadable(
  lazy(() => import("../domains/dashboard/pages/section_A"))
);

const SectionB = Loadable(
  lazy(() => import("../domains/dashboard/pages/section_B"))
);

const SectionC = Loadable(
  lazy(() => import("../domains/dashboard/pages/section_C"))
);

const SectionD = Loadable(
  lazy(() => import("../domains/dashboard/pages/section_D"))
);

export default function Router() {
  return useRoutes([
    {
      path: DOMAIN_PATHS.root,
      element: <OutletSteps />,
      children: [
        { path: "/", element: <SectionA /> },
        { path: "/sectionB", element: <SectionB /> },
        { path: "/sectionC", element: <SectionC /> },
        { path: "/sectionD", element: <SectionD /> },
      ],
    },
  ]);
}
