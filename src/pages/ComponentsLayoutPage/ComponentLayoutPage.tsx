import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import scss from "./ComponentLayoutPage.module.scss";
import { NavLink } from "react-router-dom";
const ComponentsLayoutPage = () => {
  return (
    <>
      <nav className={scss["nav-component"]}>
        <NavLink
          to="list"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          List
        </NavLink>
        <NavLink
          to="tool-tip"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Tool-Tip
        </NavLink>
        <NavLink
          to="checkbox"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Checkbox
        </NavLink>
      </nav>
      <div className={scss["main"]}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default ComponentsLayoutPage;
