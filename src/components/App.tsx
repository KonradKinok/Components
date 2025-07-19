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
const VideoPage = lazy(() => import("../pages/VideoPage/VideoPage"));
const FormsPage = lazy(() => import("../pages/FormsPage/FormsPage"));
const LoaderPage = lazy(() => import("../pages/LoaderPage/LoaderPage"));

const FusePage = lazy(() =>
  import("../pages/FusePage/FusePage").then((module) => ({
    default: module.FusePage,
  })),
);
// Others FormsExamplePage
const OthersLayoutPage = lazy(
  () => import("../pages/OthersLayoutPage/OthersLayoutPage"),
);
const KrzyzowkaPage = lazy(
  () => import("../pages/KrzyzowkaPage/KrzyzowkaPage"),
);

const MetodyTablicObiektowPage = lazy(() =>
  import("../pages/MetodyTablicObiektowPage/MetodyTablicObiektowPage").then(
    (module) => ({
      default: module.MetodyTablicObiektowPage,
    }),
  ),
);
const MetodyObiektowPage = lazy(() =>
  import("../pages/MetodyObiektowPage/MetodyObiektowPage").then((module) => ({
    default: module.MetodyObiektowPage,
  })),
);
const FormsExamplePage = lazy(() =>
  import("../pages/FormsExamplePage/FormsExamplePage").then((module) => ({
    default: module.FormsExamplePage,
  })),
);
const FormsExamplePageId = lazy(() =>
  import("../pages/FormsExamplePage/pages/FormsExamplePageId").then(
    (module) => ({
      default: module.FormsExamplePageId,
    }),
  ),
);
const FormsExamplePageFavorite = lazy(() =>
  import(
    "../pages/FormsExamplePage/pages/FormExamplePageFavorite/FormsExamplePageFavorite"
  ).then((module) => ({
    default: module.FormsExamplePageFavorite,
  })),
);
// MUI:
const MuiLayoutPage = lazy(() =>
  import("../pages/MuiPage/MuiLayoutPage/MuiLayoutPage").then((module) => ({
    default: module.MuiLayoutPage,
  })),
);
const MuiHome = lazy(() =>
  import("../pages/MuiPage/MuiHome/MuiHome").then((module) => ({
    default: module.MuiHome,
  })),
);
const MuiTextField = lazy(() =>
  import("../pages/MuiPage/MuiTextField/MuiTextField").then((module) => ({
    default: module.MuiTextField,
  })),
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
          <Route path="video" element={<VideoPage />} />
          <Route path="forms" element={<FormsPage />} />
          <Route path="fuse-page" element={<FusePage />} />
          <Route path="loader-page" element={<LoaderPage />} />
          <Route path="mui-layout-page" element={<MuiLayoutPage />}>
            {/* <Route path="mui-home-page" element={<MuiHome />} /> */}
            <Route index element={<MuiHome />} />
            <Route path="mui-text-field" element={<MuiTextField />} />
          </Route>
        </Route>
        <Route path="others" element={<OthersLayoutPage />}>
          <Route path="krzyzowka" element={<KrzyzowkaPage />} />
          <Route
            path="MetodyTablicObiektowPage"
            element={<MetodyTablicObiektowPage />}
          />
          <Route path="MetodyObiektowPage" element={<MetodyObiektowPage />} />
          <Route path="FormsExamplePage">
            <Route index element={<FormsExamplePage />} />
            <Route path=":id" element={<FormsExamplePageId />} />
            <Route path=":id/favorite" element={<FormsExamplePageFavorite />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
