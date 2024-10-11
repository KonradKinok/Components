import React from "react";
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
          Button
        </button>
        <button
          name="button-87"
          className={scss["button-87"]}
          type="button"
          onClick={handleOnClick}>
          Button
        </button>
        <button
          name="button-92"
          className={scss["button-92"]}
          type="button"
          onClick={handleOnClick}>
          Button
        </button>
        <button
          name="button-1"
          className={scss["button-1"]}
          type="button"
          onClick={handleOnClick}>
          Button
        </button>
      </div>
    </div>
  );
}
