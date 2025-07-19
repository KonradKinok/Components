import React from "react";
import scss from "./LoaderPage.module.scss";
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
      </div>
    </section>
  );
}
