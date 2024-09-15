import React from "react";
import scss from "./GradientPage.module.scss";
import picturesFood from "../../images/food.jpg";
export default function GradientPage() {
  return (
    <section className={scss["container-gradient-page"]}>
      <h1>Gradient</h1>
      <article id="1" className={scss["article"]}>
        <h2>1. Gradient shadow</h2>
        <div id="card" className={scss["card-container-gradient"]}>
          <div id="card-picture" className={scss["card-gradient"]}></div>

          <p className={scss["card-title"]}>Comfort food</p>
          <p>
            This is a must-have in any cuisine. Click on the banner to explore
            all comfort food recipes.
          </p>
        </div>
      </article>
      <article id="2" className={scss["article"]}>
        <h2>2. Picture gradient shadow</h2>
        <div id="card" className={scss["card-container-picture"]}>
          <div id="card-picture" className={scss["card-picture"]}></div>

          <p className={scss["card-title"]}>Comfort food</p>
          <p>
            This is a must-have in any cuisine. Click on the banner to explore
            all comfort food recipes.
          </p>
        </div>
      </article>
      <article className={scss["article"]}>
        <div className={scss["image-container"]}>
          <img
            src="https://picsum.photos/id/28/200/300"
            alt="Example Image"
            className={scss["image"]}
          />
        </div>
      </article>

      <article className={scss["article"]}>
        <div className={scss["image-container3"]}>
          <img
            width={200}
            src={picturesFood}
            alt="Example Image"
            className={scss["image3"]}
          />
        </div>
      </article>
    </section>
  );
}
