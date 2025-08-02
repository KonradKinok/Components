import React from "react";
import scss from "./LoaderPage.module.scss";
import { LoaderKulki } from "./LoaderKulki";
import { Grid, RotatingLines } from "react-loader-spinner";

export default function LoaderPage() {
  return (
    <section className={scss["container-loader-page"]}>
      <h1>LoaderPage</h1>
      <div className={scss["container"]}>
        <div className="container-RotatingLines">
          <p>RotatingLines</p>
          <RotatingLines
            visible={true}
            width="96"
            strokeColor="#0000ff"
            strokeWidth="5"
            ariaLabel="rotating-lines-loading"
          />
        </div>
        <div className="container-Grid">
          <p>Grid</p>
          <Grid
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
        <div className={scss["container-kulki"]}>
          <div className={scss["main"]}>
            <div className={scss["up"]}>
              {/* <div className={scss["loaders"]}>
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
                <div className={scss["loader"]} />
              </div> */}
              <div className={scss["loadersB"]}>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball0"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball1"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball2"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball3"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball4"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball5"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball6"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball7"]} />
                </div>
                <div className={scss["loaderA"]}>
                  <div className={scss["ball8"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
