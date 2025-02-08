import React, { useEffect, useMemo, useRef, useState } from "react";
import { RxLetterCaseUppercase } from "react-icons/rx";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import scss from "../KrzyzowkaPage/KrzyzowkaPage.module.scss";

export const KrzyzowkaWorking = () => {
  const inputWordRef = useRef<HTMLInputElement>(null); // Ref do inputa
  const inputCharRef = useRef<HTMLInputElement>(null); // Ref do inputa
  const [errors, setErrors] = useState({
    wordsInputData: "",
    charsInputData: "",
  });
  const [formData, setFormData] = useLocalStorage(
    {
      wordsInputData: "",
      charsInputData: "",
    },
    "__words_storage_key",
  );
  const [dataTable, setDataTable] = useState<{
    wordsInputDataTable: string[];
    charsInputDataTable: string[];
  }>({
    wordsInputDataTable: [],
    charsInputDataTable: [],
  });
  const [resultTable, setResultTable] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Obsługa checkboxa
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.wordsInputData && formData.charsInputData) {
      const tableWordsSplit = formData.wordsInputData
        .split(",")
        .join("")
        .split(" ");
      const tableCharsSplit = formData.charsInputData
        .replace(/,/g, "") // Usuwamy przecinki
        .replace(/\s+/g, "") // Usuwamy spacje
        .split(""); // Dzielimy string na pojedyncze litery
      setDataTable((prevState) => ({
        ...prevState, // Zachowujemy wszystkie inne klucze w obiekcie
        wordsInputDataTable: tableWordsSplit,
        charsInputDataTable: tableCharsSplit,
      }));
      // const resultWords: string[] = canCreateWords(
      //   dataTable.charsInputDataTable,
      //   dataTable.wordsInputDataTable,
      // );
      // setResultTable(resultWords);
    }
  };
  const handleIconClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    // Dostajemy dostęp do inputa przez ref
    if (inputRef.current) {
      const inputName = inputRef.current.name;

      console.log("Clicked input name:", inputName);

      // Resetujemy wartość inputa
      setFormData((prevData) => ({
        ...prevData,
        [inputName]: "", // Resetujemy wartość w formData
      }));
    }
  };

  // useEffect(() => {
  //   const resultWords: string[] = canCreateWords(
  //     dataTable.charsInputDataTable,
  //     dataTable.wordsInputDataTable,
  //   );
  //   setResultTable(resultWords);
  // }, [dataTable]);
  const resultWords = useMemo(() => {
    console.log("render useMemo");
    return canCreateWordsRepeatChar(
      dataTable.charsInputDataTable,
      dataTable.wordsInputDataTable,
    );
  }, [dataTable]);
  console.log("render componentu");

  return (
    <div className={scss["krzyzowka-working-container"]}>
      <h1>KrzyzowkaWorking</h1>
      <div className={scss["krzyzowka-working-container-form"]}>
        <form onSubmit={handleSubmit}>
          <div className={scss["field"]}>
            <input
              ref={inputWordRef}
              type="text"
              name="wordsInputData"
              value={formData.wordsInputData}
              onChange={handleChange}
              placeholder={"Input words"}
              required
            />
            <span
              className={`${scss["icons-input-left"]} ${scss["eye-input-password"]}`}>
              <RxLetterCaseUppercase className={scss["icon"]} />
            </span>
            <span
              className={`${scss["icons-input-right"]} ${scss["eye-input-password"]}`}
              onClick={() => handleIconClick(inputWordRef)}>
              <RxCross1 className={scss["icon"]} />
            </span>
            {errors.wordsInputData && (
              <div className={`${scss["tooltip"]} ${scss["error"]}`}>
                {errors.wordsInputData}
              </div>
            )}
          </div>

          <div className={scss["field"]}>
            <input
              ref={inputCharRef} // Używamy ref w input
              type={"text"}
              name="charsInputData"
              value={formData.charsInputData}
              onChange={handleChange}
              placeholder="Input char"
              required
            />
            <span
              className={`${scss["icons-input-left"]} ${scss["eye-input-password"]}`}>
              <RiCharacterRecognitionFill className={scss["icon"]} />
            </span>
            <span
              className={`${scss["icons-input-right"]} ${scss["eye-input-password"]}`}
              onClick={() => handleIconClick(inputCharRef)}>
              <RxCross1 className={scss["icon"]} />
            </span>

            {errors.charsInputData && (
              <div className={`${scss["tooltip"]} ${scss["error"]}`}>
                {errors.charsInputData}
              </div>
            )}
          </div>

          <button type="submit">Check</button>
        </form>
        <div>
          <p>Words: {dataTable.wordsInputDataTable.join(" ")}</p>
          <p>Chars: {dataTable.charsInputDataTable.join(" ")}</p>
          <p>Found words: {resultWords.join(" ")}</p>
        </div>
      </div>
    </div>
  );
};

export function canCreateWordsNoRepeatChar(
  lettersArray: string[],
  wordsArray: string[],
): string[] {
  // Typujemy funkcję pomocniczą, która zlicza wystąpienia liter w tablicy
  const countLetters = (arr: string[]): Record<string, number> => {
    const letterCount: Record<string, number> = {};
    ``;
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

export function canCreateWordsRepeatChar(
  lettersArray: string[],
  wordsArray: string[],
): string[] {
  // Tworzymy zbiór dostępnych liter
  const availableLetters: Set<string> = new Set(lettersArray);

  // Tworzymy wynikową tablicę
  const result: string[] = [];

  // Sprawdzamy każde słowo w drugiej tablicy
  for (const word of wordsArray) {
    const wordLetters: Set<string> = new Set(word.split("")); // Unikalne litery w słowie
    let canCreate = true;

    // Sprawdzamy, czy wszystkie litery słowa znajdują się w dostępnych literach
    for (const letter of wordLetters) {
      if (!availableLetters.has(letter)) {
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
