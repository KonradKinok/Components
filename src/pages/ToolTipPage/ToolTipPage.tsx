import React from "react";
import scss from "./ToolTipPage.module.scss";

export default function ToolTipPage() {
  return (
    <div className={scss["container-tooltip-page"]}>
      <h1>ToolTip page</h1>
      <div className={scss["container"]}>
        <form action="">
          <label htmlFor="toggle-switch">
            <p className={scss["custom-title"]}>Free cancellation</p>
            <p>No extra charges</p>
          </label>
          <input
            type="checkbox"
            name="toggle-switch"
            id="toggle-switch"
            className={scss["toggle-switch"]}
          />
        </form>
      </div>
    </div>
  );
}
