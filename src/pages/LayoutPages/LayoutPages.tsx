import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigation } from "../../components/Navigation/Navigation";
import scss from "./LayoutPages.module.scss";
import { Footer } from "../../components/Footer/Footer";

export const LayoutPage: React.FC = () => {
  return (
    <div className={scss["main-container"]}>
      <header className={scss["header"]}>
        <Navigation />
      </header>
      <main className={scss["main"]}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
