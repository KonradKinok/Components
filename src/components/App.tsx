import React, { useEffect, lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { LayoutPage } from "../pages/LayoutPages/LayoutPages";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// Components
const ComponentsLayoutPage = lazy(
  () => import("../pages/ComponentsLayoutPage/ComponentLayoutPage"),
);
const ToolTipPage = lazy(() => import("../pages/ToolTipPage/ToolTipPage"));
const ListPage = lazy(() => import("../pages/ListPage/ListPage"));
const CheckboxPage = lazy(() => import("../pages/CheckBoxPage/CheckBoxPage"));
const GradientPage = lazy(() => import("../pages/GradientPage/GradientPage"));
// Others
const OthersLayoutPage = lazy(
  () => import("../pages/OthersLayoutPage/OthersLayoutPage"),
);
const KrzyzowkaPage = lazy(
  () => import("../pages/KrzyzowkaPage/KrzyzowkaPage"),
);
export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="components" element={<ComponentsLayoutPage />}>
          <Route path="tool-tip" element={<ToolTipPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="checkbox" element={<CheckboxPage />} />
          <Route path="gradient" element={<GradientPage />} />
        </Route>
        <Route path="others" element={<OthersLayoutPage />}>
          <Route path="krzyzowka" element={<KrzyzowkaPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
