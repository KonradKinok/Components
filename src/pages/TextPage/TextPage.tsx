import React from "react";
import scss from "./TextPage.module.scss";

export default function TextPage() {
  return (
    <section className={scss["container-text-page"]}>
      <h1>TextPage</h1>
      <div className={scss["container-gold-text"]}>
        <h2 className={scss["gold-text"]} data-gold="#codevember">
          ADMIN:
        </h2>
        <p className={scss["gold-text"]} data-gold="#codevember">
          ADMIN:
        </p>
      </div>
      <div className={scss["container-silver-text"]}>
        <h2 className={scss["silver-text"]} data-silver="Metallic Text">
          USER:
        </h2>
        <p className={scss["silver-text"]} data-silver="Metallic Text">
          USER:
        </p>
      </div>
    </section>
  );
}
