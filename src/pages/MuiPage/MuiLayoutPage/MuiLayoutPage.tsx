import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import scss from "./MuiLayootPage.module.scss";

export const MuiLayoutPage: React.FC = () => {
  return (
    <nav className={scss["mui-layout-container"]}>
      <div>
        <NavLink
          to="mui-text-field"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Text Field
        </NavLink>
        <NavLink
          to="tool-tip"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Tool-Tip
        </NavLink>
      </div>
      <section className={scss["mui-layout-outlet"]}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </nav>
  );
};
