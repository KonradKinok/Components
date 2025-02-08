import React, { useEffect, useMemo, useState } from "react";
import { KontekstWywolaniaFunkcji } from "./MetodyObiektowComponents/KontekstWywolaniaFunkcji/KontekstWywolaniaFunkcji";
import scss from "./MetodyObiektowPage.module.scss";
export const MetodyObiektowPage = () => {
  return (
    <div className={scss["metodyObiektowPage-mainContainer"]}>
      <h1>Metody obiektów</h1>
      <KontekstWywolaniaFunkcji />
    </div>
  );
};

function getRandomColorRgba(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // const a = 0.9 + Math.random() * 0.3;
  const a = 1;

  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
}
