import React, { useEffect, useMemo, useState } from "react";
import {
  type ContactsTableSource,
  contactsTableSource,
} from "./db/contactsTableSource";
import {
  MetodyTablic,
  MetodyTablicFilter,
  MetodyTablicFind,
  MetodyTablicEvery,
  MetodyTablicSome,
  MetodyTablicReduce,
  MetodyTablicToSort,
} from "./MetodyTablic/MetodyTablic";
import { SingleInput } from "../FormsPage/SimpleInput/SimpleInput";
import scss from "./MetodyTablicObiektowPage.module.scss";
export const MetodyTablicObiektowPage = () => {
  const [mainDataTable, setMainDataTable] = useState(contactsTableSource);
  const [filteredMainDataTable, setfilteredMainDataTable] = useState<
    ContactsTableSource[]
  >([]);
  const [inputFilter, setInputFilter] = useState<string>("");
  const [singleInputError, setSingleInputError] = useState<string>("");

  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;
    const currentName = event.target.name;
    let errorTextInput = "";

    if (currentName === "firstSingleInputName") {
      setInputFilter(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setSingleInputError(errorTextInput);
    }
  };

  useEffect(() => {
    const filteredMainDataTableTemp = mainDataTable.filter(
      ({ name }) => name.toLowerCase() == inputFilter.toLowerCase(),
    );
    setfilteredMainDataTable(filteredMainDataTableTemp);
  }, [inputFilter]);
  console.log(
    "%cMetodyTablicObiektowPage - start",
    "color: green; font-weight: bold;",
  );

  return (
    <div className={scss["metodyTablicObiektowPage-mainContainer"]}>
      <h1>Metody tablic i obiektów</h1>
      <p className={scss["container-tooltip"]}>
        <span>array.method(callback(</span>
        <span data-tooltip="Pierwszym parametrem będzie wartość bieżącego elementu tablicy currentValue">
          currentValue
        </span>
        ,{" "}
        <span data-tooltip="Drugim parametrem będzie indeks bieżącego elementu tablicy index">
          index
        </span>
        ,{" "}
        <span data-tooltip="Trzecim parametrem będzie odniesienie do oryginalnej tablicy array">
          array
        </span>
        ))
      </p>
      <p>
        {`array.method((item, idx, arr) => {
  // logika, która będzie wykonywana w każdej iteracji
});`}
      </p>
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.map"></hr>
        <ul className={scss["list-row"]}>
          {mainDataTable.map((contact, index) => {
            const randomColor = getRandomColorRgba(); // Deklarujemy zmienną tutaj
            const contactName =
              contact.name === "Reuben Henry" ? "📀REUBEN HENRY" : contact.name;

            return (
              <li
                key={contact.id}
                style={{ color: randomColor }} // Dynamiczna zmienna CSS
                data-tooltip={`${randomColor} index: ${index}`} // Dodajemy losowy kolor jako tooltip
              >
                {contactName}
              </li>
            );
          })}
        </ul>
        <MetodyTablic />
      </div>
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.filter"></hr>
        <p>
          {`array.filter((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});
`}
        </p>
        <p>{`const values = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// positiveValues zawiera wszystkie elementy tablicy wartości, które spełniły warunek wywołania zwrotnego, tj. były >= 0`}</p>
        <SingleInput
          inputName="firstSingleInputName"
          singleInputValue={inputFilter}
          handleSingleInputChange={handleSingleInputChange}
          inputPlaceholder="Enter your text"
          // iconLeft={<FaUser size={16} />}
          singleInputError={singleInputError}
          required={false}
          classNameInputContainer={scss["custom-input-container"]}
        />

        <ul className={scss["list-row"]}>
          {filteredMainDataTable.map((contact, index) => {
            const randomColor = getRandomColorRgba(); // Deklarujemy zmienną tutaj

            return (
              <li
                key={contact.id}
                style={{ color: randomColor }} // Dynamiczna zmienna CSS
                data-tooltip={`${randomColor} index: ${index}`} // Dodajemy losowy kolor jako tooltip
              >
                {contact.name}
              </li>
            );
          })}
        </ul>
        <MetodyTablicFilter />
      </div>
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.find" />
        <p>{`array.find((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});`}</p>
        <p>
          Metoda find(callback) pozwala znaleźć i zwrócić pierwszy pasujący
          element, który spełnia warunek, po czym iteracja jest zatrzymywana.
          Oznacza to, że w przeciwieństwie do metody filter(callback),
          przeszukuje ona do pierwszego dopasowania.
        </p>
        <MetodyTablicFind />
      </div>
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.every" />
        <p>
          Metoda every(callback) sprawdza, czy wszystkie elementy spełniają
          warunek funkcji wywołania zwrotnego.
        </p>
        <p>Zwraca true, jeśli wszystkie elementy tablicy spełniają warunek</p>
        <p>
          Zwraca false, jeśli przynajmniej jeden element tablicy nie spełnia
          warunku.
        </p>
        <p>{`array.every((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});`}</p>
        <p>{`// Czy wszystkie elementy są większe lub równe zero? - tak
[1, 2, 3, 4, 5].every((value) => value >= 0); // true
`}</p>
        <p>{`// Czy wszystkie elementy są większe lub równe zero? - nie
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false`}</p>

        <p>{`const products = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false`}</p>
        <p>
          Metoda every(callback) sprawdza, czy wszystkie elementy spełniają
          warunek funkcji wywołania zwrotnego.
        </p>

        <MetodyTablicEvery />
      </div>
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.some" />
        <p>
          Metoda some(callback) sprawdza, czy co najmniej jeden element spełnia
          warunek funkcji wywołania zwrotnego.
        </p>
        <p>
          Zwraca true, jeśli co najmniej jeden element tablicy spełnia warunek;
        </p>
        <p>Zwraca false, jeśli żaden element tablicy nie spełnia warunku;</p>
        <p>{`array.some((element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
});`}</p>
        <p>{`// Czy co najmniej jeden element jest większy lub równy zero? - tak
[1, 2, 3, 4, 5].some(value => value >= 0); // true
`}</p>
        <p>{`/ Czy jest co najmniej jeden element mniejszy od zera? - nie
[1, 2, 3, 4, 5].some(value => value < 0); // false`}</p>

        <p>
          Metoda every(callback) sprawdza, czy wszystkie elementy spełniają
          warunek funkcji wywołania zwrotnego.
        </p>

        <MetodyTablicSome />
      </div>
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.reduce" />
        <p>
          Metoda reduce(callback, initialValue) służy do sekwencyjnego
          przetwarzania każdego elementu tablicy przy jednoczesnym zapisywaniu
          wyniku pośredniego.
        </p>
        <p>
          Zwraca dowolną wartość (obiekt, tablicę, ciąg znaków, liczbę itp.);
        </p>
        <p>
          Może zastąpić funkcjonalność dowolnej innej metody iteracyjnej
          tablicy, a nawet ich kombinację.
        </p>
        <p>{`array.reduce((previousValue, element, index, array) => {
  // Ciało funkcji wywołania zwrotnego
}, initialValue);`}</p>
        <p>Metoda reduce() oczekuje 2 parametrów:</p>
        <ul>
          <li>
            Pierwszy parametr (wymagany) — to funkcja wywołania zwrotnego, która
            "przetwarza" każdy element tablicy;
          </li>
          <li>
            Drugi parametr (opcjonalny) — initialValue — początkowa wartość
            akumulatora.
          </li>
        </ul>
        <p>
          Funkcja wywołania zwrotnego oczekuje czterech parametrów od parametru
          reduce. Parametry te, podobnie jak w wywołaniach zwrotnych innych
          iteratorów tablic, mogą być pominięte, jeśli ich nie potrzebujesz, ale
          nie możesz naruszyć ich kolejności:
        </p>
        <ol>
          <li>
            parametr (previousValue) jest akumulatorem, czyli wynikiem
            pośrednim. Wartość zwrócona przez funkcję zwrotną w bieżącej
            iteracji będzie wartością tego parametru w następnej iteracji;
          </li>
          <li>parametr — bieżący element tablicy;</li>
          <li>parametr — indeks bieżącej iteracji;</li>
          <li>parametr — odniesienie do oryginalnej tablicy.</li>
        </ol>
        <p>
          Najłatwiej wyobrazić sobie jego działanie na przykładzie obliczania
          sumy elementów tablicy.
        </p>
        <p>{`/const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12
`}</p>
        <p>Przyjrzyjmy się bliżej działaniu reduce w powyższym przykładzie:</p>
        <ul>
          <li>Początkowa wartość akumulatora wynosi 0;</li>
          <li>Pierwsza iteracja funkcji zwrotnej 0 + 2 zwróci 2;</li>
          <li>Druga iteracja funkcji zwrotnej 2 + 7 zwróci 9;</li>
          <li>Trzecia iteracja funkcji zwrotnej 9 + 3 zwróci 12.</li>
        </ul>
        <p>Wynikiem powyższego kodu będzie 12.</p>
        <p>
          Oznacza to, że metoda reduce() jest używana, gdy musisz wziąć "wiele"
          i zredukować je do "jednego". W codziennych zadaniach jej użycie
          ogranicza się do pracy z liczbami.
        </p>
        <MetodyTablicReduce />
      </div>
      {/* toSort() */}
      <div className={scss[""]}>
        <hr className={`${scss["hr"]}`} data-label="mainDataTable.toSort" />
        <p>Metoda toSorted() sortuje elementy tablicy.</p>
        <p>Domyślnie sortuje w porządku rosnącym.</p>
        <p>
          Zwraca false, jeśli przynajmniej jeden element tablicy nie spełnia
          warunku.
        </p>
        <p>{`array.toSorted();`}</p>
        <p>{`const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
`}</p>
        <p>{`// Czy wszystkie elementy są większe lub równe zero? - nie
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false`}</p>

        <p>
          {`const products = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 0 },
];
const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false`}
        </p>
        <p>
          Aby określić kolejność sortowania, należy przekazać funkcję zwrotną z
          dwoma parametrami do metody toSorted(compareFunction). Jest to funkcja
          porównująca (compare function), a kolejność sortowania zależy od jej
          wyniku. Metoda toSorted() wywoła ją dla dwóch dowolnych elementów.
        </p>
        <p>{`array.toSorted((a, b) => {
  // Callback function body
});`}</p>
        <p>a — pierwszy element do porównania.</p>
        <p>b — drugi element do porównania.</p>
        <p>Sortowanie w porządku malejącym</p>
        <p>
          Jeśli wywołanie compareFunction(a, b) zwróci jakąkolwiek wartość
          dodatnią, tj. b jest większe niż a, sortowanie umieści b przed a.
        </p>
        <p>{`const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]`}</p>
        <p>
          Aby posortować ciągi w kolejności alfabetycznej, rosnąco lub malejąco,
          używa się metody ciągów localeCompare().
        </p>
        <p>firstString.localeCompare(secondString)</p>
        <p>
          Metoda localeCompare() jest wygodna do sortowania ciągów, ponieważ
          metoda toSorted() oczekuje tych samych wartości od funkcji wywołania
          zwrotnego.
        </p>
        <p>{`const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
`}</p>
        <p>
          Podczas pracy z tablicą obiektów sortowanie odbywa się według wartości
          liczbowej lub ciągowej określonej właściwości. Na przykład, mamy grupę
          studentów z wynikami testów i musimy posortować tablicę obiektów
          według trzech różnych scenariuszy:
        </p>
        <ul>
          <li>w porządku rosnącym według liczby punktów,</li>
          <li>w porządku malejącym według liczby punktów,</li>
          <li>według nazwiska studenta w porządku alfabetycznym.</li>
        </ul>
        <p>{`const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);`}</p>
        <MetodyTablicToSort />
      </div>
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

function changeEven(numbers: number[], value: number) {
  const newArr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i] + value);
      continue;
    }
    newArr.push(numbers[i]);
  }
  return newArr;
}
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
