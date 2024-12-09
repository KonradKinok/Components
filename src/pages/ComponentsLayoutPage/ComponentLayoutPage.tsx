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
        <NavLink
          to="gradient"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Gradient
        </NavLink>
        <NavLink
          to="icons"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Icons
        </NavLink>
        <NavLink
          to="grid"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Grid
        </NavLink>
        <NavLink
          to="combobox"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          ComboBox
        </NavLink>
        <NavLink
          to="button"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Button
        </NavLink>
        <NavLink
          to="video"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Video
        </NavLink>
        <NavLink
          to="forms"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Forms
        </NavLink>
        <NavLink
          to="mui-layout-page"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          MUI
        </NavLink>
        <NavLink
          to="fuse-page"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Fuse
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
