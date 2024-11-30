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
      </div>
    </div>
  );
}
