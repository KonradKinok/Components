import React from "react";
import scss from "./ListPage.module.scss";

export default function ListPage() {
  return (
    <div className={scss["container-list-page"]}>
      <h1 className={scss.title}>List page</h1>
      <div
        className={`${scss["container-unnumbered-list"]} ${scss["custom-list"]}`}>
        <p>Unnumbered list:</p>
        <ul>
          <li>Grecja</li>
          <li>Francja</li>
          <li>Niemcy</li>
          <li>USA</li>
          <li>Wielka Brytania</li>
        </ul>
      </div>
      <div>
        <p>Numbered list:</p>
        <ol
          className={`${scss["container-numbered-list"]} ${scss["custom-list"]}`}>
          <li>Grecja</li>
          <li>Francja</li>
          <li>Niemcy</li>
          <li>USA</li>
          <li>Wielka Brytania</li>
        </ol>
      </div>
    </div>
  );
}
