import React from "react";
import scss from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={scss.container}>
      <h1 className={scss.title}>
        Components manager Home page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
