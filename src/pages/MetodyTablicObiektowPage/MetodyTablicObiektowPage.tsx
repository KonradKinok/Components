import React, { useEffect, useMemo, useState } from "react";
import {
  type ContactsTableSource,
  contactsTableSource,
} from "./db/contactsTableSource";
import { MetodyTablic, MetodyTablicFind } from "./MetodyTablic/MetodyTablic";
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
  console.table(mainDataTable);
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
        <MetodyTablicFind />
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
