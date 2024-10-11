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
const IconsPage = lazy(() => import("../pages/IconsPage/IconsPage"));
const GridPage = lazy(() => import("../pages/GridPage/GridPage"));
const ComboBoxPage = lazy(() => import("../pages/ComboBoxPage/ComboBoxPage"));
const ButtonPage = lazy(() => import("../pages/ButtonPage/ButtonPage"));
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
          <Route path="icons" element={<IconsPage />} />
          <Route path="grid" element={<GridPage />} />
          <Route path="combobox" element={<ComboBoxPage />} />
          <Route path="button" element={<ButtonPage />} />
        </Route>
        <Route path="others" element={<OthersLayoutPage />}>
          <Route path="krzyzowka" element={<KrzyzowkaPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
