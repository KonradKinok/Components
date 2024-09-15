import React from "react";
import scss from "./GridPage.module.scss";
export default function GridPage() {
  return (
    <section className={scss["container-gradient-page"]}>
      <h1>Grid Layout</h1>

      <p>
        The CSS Grid Layout Module offers a grid-based layout system, with rows
        and columns, making it easier to design web pages without having to use
        floats and positioning:
      </p>

      <div className={scss["grid-container"]}>
        <div className={scss["item1"]}>Header</div>
        <div className={scss["item2"]}>Menu</div>
        <div className={scss["item3"]}>Main</div>
        <div className={scss["item4"]}>Right</div>
        <div className={scss["item5"]}>Footer</div>
      </div>
    </section>
  );
}
