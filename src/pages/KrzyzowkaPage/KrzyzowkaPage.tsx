import React from "react";
import { KrzyzowkaWorking } from "./KrzyzowkaWorking";
import { canCreateWords } from "./KrzyzowkaWorking";
import scss from "./KrzyzowkaPage.module.scss";

export default function KrzyzowkaPage() {
  // Przykład użycia:
  const lettersArrayEgzample1: string[] = ["a", "b", "c", "a", "t"];
  const wordsArrayEgzample1: string[] = [
    "cat",
    "bat",
    "tab",
    "tac",
    "car",
    "act",
    "cab",
    "cac",
  ];
  const resultEgzample1: string[] = canCreateWords(
    lettersArrayEgzample1,
    wordsArrayEgzample1,
  );
  const lettersArrayEgzample2: string[] = [
    "l",
    "a",
    "r",
    "e",
    "v",
    "w",
    "m",
    "p",
    "g",
    "u",
    "o",
    "x",
    "t",
    "y",
    "c",
    "n",
    "f",
    "h",
  ];
  const wordsArrayEgzample2: string[] = [
    "noc",
    "issos",
    "stres",
    "kadr",
    "kruk",
    "kos",
    "udo",
    "oko",
    "komendant",
    "uznam",
    "sufler",
    "tulipan",
    "pegaz",
    "ner",
    "wapno",
    "elf",
  ];
  const resultEgzample2: string[] = canCreateWords(
    lettersArrayEgzample2,
    wordsArrayEgzample2,
  );
  console.log(resultEgzample2);

  return (
    <div className={scss["container-krzyzowka-page"]}>
      <h1>Krzyżówka Express</h1>
      <div>
        <h2>Krzyżówka Express Egzample 1</h2>

        <p>
          Letter array:
          {lettersArrayEgzample1.map((item: string, index: number) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
        <p>
          Words Array:
          {wordsArrayEgzample1.map((item: string, index: number) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
        <p>
          Result:
          {resultEgzample1.map((item: string, index: number) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
      </div>
      <div>
        <h2>Krzyżówka Express Egzample 2</h2>
        <p>
          Letter array:
          {lettersArrayEgzample2.map((item: string, index: number) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
        <p>
          Words Array:
          {wordsArrayEgzample2.map((item: string, index: number) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
        <p>
          Result:
          {resultEgzample2.map((item: string, index: number) => (
            <span key={index}>{item}, </span>
          ))}
        </p>
      </div>
      <div className={scss["krzyzowka-working-component-container"]}>
        <KrzyzowkaWorking />
      </div>
    </div>
  );
}
