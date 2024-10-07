import React from "react";
import scss from "./CheckBoxPage.module.scss";

export default function CheckBoxPage() {
  return (
    <div className={scss["container-checkbox-page"]}>
      <h1>ToolTip page</h1>
      <div className={scss["container"]}>
        <form className={scss["form"]} action="">
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
      <div className={scss["container"]}>
        <form className={scss["form"]} action="">
          <label htmlFor="toggle-switch">
            <p className={scss["custom-title"]}>Free cancellation</p>
            <p>No extra charges</p>
          </label>
          <input
            type="radio"
            name="toggle-switch"
            id="toggle-switch"
            className={scss["toggle-switch"]}
          />
          <input
            type="radio"
            name="toggle-switch"
            id="toggle-switch"
            className={scss["toggle-switch"]}
          />
        </form>
      </div>
    </div>
  );
}
