import React from "react";
import { FaUser } from "react-icons/fa";
import scss from "./ButtonPage.module.scss";

export default function ButtonPage() {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    console.log(name);
  };

  return (
    <div className={scss["container-button-page"]}>
      <h1>Button Page</h1>
      <div className={scss["container-button"]}>
        <button
          name="button-30"
          className={scss["button-30"]}
          type="button"
          onClick={handleOnClick}>
          Button 30
        </button>
        <button
          name="button-33"
          className={scss["button-33"]}
          type="button"
          onClick={handleOnClick}>
          Button 33
        </button>
        <button
          name="button-87"
          className={scss["button-87"]}
          type="button"
          onClick={handleOnClick}>
          Button 87
        </button>
        <button
          name="button-92"
          className={scss["button-92"]}
          type="button"
          onClick={handleOnClick}>
          Button 92
        </button>
        <button
          name="button-1"
          className={scss["button-1"]}
          type="button"
          onClick={handleOnClick}>
          Button 1
        </button>
        <button
          name="button-2"
          className={scss["button-2"]}
          type="button"
          onClick={handleOnClick}>
          Button 2
        </button>
        <button
          name="button-3"
          className={scss["button-3"]}
          type="button"
          onClick={handleOnClick}>
          Button 3
        </button>
        <button
          name="button-4"
          className={scss["button-4"]}
          type="button"
          onClick={handleOnClick}>
          Button 4
        </button>
        <div className={scss["button-5-container"]}>
          <button className={scss["button-5"]}>
            <span className={scss["text"]}>Button 5</span>
            <span className={scss["icon"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className={scss["button-6-container"]}>
          <button className={scss["button-6"]}>
            <span className={scss["text"]}>Button 6</span>
            <span className={scss["icon-container"]}>
              <FaUser className={scss["icon"]} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
