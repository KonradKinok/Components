import React from "react";
import scss from "./KrzyzowkaPage.module.scss";

export default function KrzyzowkaPage() {
  function canCreateWords(
    lettersArray: string[],
    wordsArray: string[],
  ): string[] {
    // Typujemy funkcję pomocniczą, która zlicza wystąpienia liter w tablicy
    const countLetters = (arr: string[]): Record<string, number> => {
      const letterCount: Record<string, number> = {};
      for (const letter of arr) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
      }
      return letterCount;
    };

    // Zliczamy dostępne litery w pierwszej tablicy
    const availableLetters: Record<string, number> = countLetters(lettersArray);

    // Tworzymy wynikową tablicę
    const result: string[] = [];

    // Sprawdzamy każde słowo w drugiej tablicy
    for (const word of wordsArray) {
      const wordLetters: Record<string, number> = countLetters(word.split("")); // Zliczamy litery w słowie
      let canCreate = true;

      // Sprawdzamy, czy słowo można utworzyć z dostępnych liter
      for (const letter in wordLetters) {
        if (
          !availableLetters[letter] ||
          wordLetters[letter] > availableLetters[letter]
        ) {
          canCreate = false;
          break; // Jeśli nie możemy utworzyć słowa, przerywamy
        }
      }

      // Jeśli możemy utworzyć słowo, dodajemy je do wyniku
      if (canCreate) {
        result.push(word);
      }
    }

    return result;
  }

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
    </div>
  );
}
