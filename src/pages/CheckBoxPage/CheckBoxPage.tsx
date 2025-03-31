import React, { useState } from "react";
import scss from "./CheckBoxPage.module.scss";

export default function CheckBoxPage() {
  const [selectedOption, setSelectedOption] = useState("free");

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
      <div className={scss["radio-container-pionowy"]}>
        <div className={scss["radio-container"]}>
          <input
            checked={selectedOption === "free"}
            id="radio-free"
            name="radio"
            type="radio"
            onChange={() => setSelectedOption("free")}
          />
          <label htmlFor="radio-free">Data otrzymania faktury</label>

          <input
            checked={selectedOption === "basic"}
            id="radio-basic"
            name="radio"
            type="radio"
            onChange={() => setSelectedOption("basic")}
          />
          <label htmlFor="radio-basic">Basic</label>

          <input
            checked={selectedOption === "premium"}
            id="radio-premium"
            name="radio"
            type="radio"
            onChange={() => setSelectedOption("premium")}
          />
          <label htmlFor="radio-premium">Premium</label>

          <div className={scss["glider-container"]}>
            <div className={scss["glider"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
