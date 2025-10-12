import React from "react";
import libraryIcon from "../../images/icons.svg";
// import videoIcon from "../../images/icons.svg#Capa_1";
import flagIcon from "../../images/flag-us-svgrepo-com.svg";
import video from "../../images/video.svg";
import scss from "./IconsPage.module.scss";
export default function IconsPage() {
  return (
    <section className={scss["section-icons-page"]}>
      <h1>Icons page</h1>
      <article className={scss["article-icons-page-1"]}>
        <h2>1. Icon svg directly</h2>

        <div className={scss["container-icons-page-1"]}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="3em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
          </svg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero tempora
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
        </div>
      </article>
      <article className={scss["article-icons-page-2"]}>
        <h2>2. Icon svg from file</h2>

        <div className={scss["container-icons-page-2"]}>
          <img src={libraryIcon} alt="libraryIcon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero tempora
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
        </div>
      </article>
      <article className={scss["article-icons-page-3"]}>
        <h2>3. Icon svg from file 2</h2>
        <div className={scss["container-icons-page-3"]}>
          <svg className="modal-icon" width="18" height="24">
            <use href={`${libraryIcon}#icon-book`}></use>
          </svg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero tempora
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
        </div>
      </article>
      <article className={scss["article-icons-page-4"]}>
        <h2>4. Icon svg from css background</h2>

        <div className={scss["container-icons-page-4"]}>
          <div className={scss["icon-background"]}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero tempora
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
        </div>
      </article>
      <article className={scss["article-icons-page-5"]}>
        <h2>5. Icon svg from file 3</h2>
        <div className={scss["container-icons-page-3"]}>
          <img src={flagIcon} alt="" width={64} height={64} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero tempora
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
        </div>
      </article>
      <article className={scss["article-icons-page-5"]}>
        <h2>5. Icon svg from file 3</h2>
        <div className={scss["container-icons-page-3"]}>
          <img src={video} alt="" width={64} height={64} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero tempora
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
        </div>
      </article>
      <article className={scss["article-icons-page-6"]}>
        <h2>6. Icon change</h2>
        <div className={scss["container-icons-page-6"]}>
          <p className={scss["icon-change-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quasi fugiat voluptas, nisi at officia error vero libero temporap
            iure fuga eos quaerat facilis possimus debitis iusto quam dolorem
            eaque!
          </p>
          <button className={scss["button-icon-change"]}>button</button>
          <div className={scss["icon-change-figure"]}></div>
        </div>
      </article>
      <article className={scss["article-icons-page-7"]}>
        <div>
          <p>
            📊📉📈📅📆🗓️📅📄⛔⚠️🖨️🖥️💽💾💿📀📔📕📖📗📘📚📓📒📃📜📄📄📑📝📧📫🎫0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟
          </p>
        </div>
      </article>
    </section>
  );
}
