import React, { Suspense } from "react";
import scss from "./OthersLayoutPage.module.scss";
import { NavLink, Outlet } from "react-router-dom";

export default function OthersLayoutPage() {
  return (
    <>
      <nav className={scss["nav-others"]}>
        <NavLink
          to="krzyzowka"
          className={({ isActive }) => (isActive ? scss.active : "")}>
          Krzyżówka
        </NavLink>
      </nav>
      <div className={scss["main-others"]}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
