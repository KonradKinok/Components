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
      <div className={scss["checkbox1-main-container"]}>
        <label className={scss["checkbox-container"]}>
          <input type="checkbox" id="checkbox1" />

          <span className={scss["checkmark"]}></span>
        </label>
      </div>
      <div className={scss["checkbox2-main-container"]}>
        <div className={scss["checkbox-wrapper-4"]}>
          <input className={scss["inp-cbx"]} id="morning" type="checkbox" />
          <label className={scss["cbx"]} htmlFor="morning">
            <span>
              <svg width="12px" height="10px">
                <use xlinkHref="#check-4"></use>
              </svg>
            </span>
            <span>Morning</span>
          </label>
          <svg className={scss["inline-svg"]}>
            <symbol id="check-4" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  );
}
