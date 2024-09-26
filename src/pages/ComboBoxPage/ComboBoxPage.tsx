import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import scss from "./ComboBoxPage.module.scss";
import flagUsa from "../../images/flag-us-svgrepo-com.svg";
import { SingleValue } from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function ComboBoxPage() {
  const [selectedCar, setSelectedCar] = useState<string>("volvo");
  const [selectedOption1, setSelectedOption1] = useState<SingleValue<{
    value: string;
    label: string;
  }> | null>(null);
  // Funkcja obsługi zmiany wartości w select
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(event.target.value);
  };
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "yellow" // Kolor dla wybranej opcji
        : state.isFocused
          ? "red" // Czerwony kolor tła przy hover
          : undefined,
      cursor: "pointer",
      color: state.isSelected ? "chartreuse" : "darkmagenta", // Kolor tekstu dla opcji wybranej i reszty
      ":active": {
        backgroundColor: "orange", // Kolor tła, gdy opcja jest kliknięta
        color: "pink",
      },
    }),
    control: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      borderColor: "blueviolet", // Kolor obramowania kontrolki
      ":hover": {
        borderColor: "black", // Kolor obramowania przy hover na select
      },
    }),
  };
  // Opcje z ikonami
  const carOptions = [
    {
      value: "volvo",
      label: (
        <div>
          <img
            src={flagUsa}
            alt="volvo"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Volvo
        </div>
      ),
    },
    {
      value: "saab",
      label: (
        <div className={scss["react-select-saab"]}>
          <img
            src={flagUsa}
            alt="saab"
            style={{ width: "20px", marginRight: "10px" }}
          />
          <p className={scss["react-select-text-saab"]}>Saab</p>
        </div>
      ),
    },
    {
      value: "mercedes",
      label: (
        <div>
          <img
            src={flagUsa}
            alt="mercedes"
            style={{ width: "30px", marginRight: "10px" }}
          />
          Mercedes
        </div>
      ),
    },
    {
      value: "audi",
      label: (
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <img
            src={flagUsa}
            alt="audi"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Audi
        </div>
      ),
    },
  ];
  return (
    <div className={scss["container-combobox-page"]}>
      <h1>ComboBox page</h1>
      <div className={scss["container"]}>
        <h2>1. ComboBox - regular</h2>
        <label htmlFor="cars">Choose a car:</label>
        <select name="cars" id="cars" onChange={handleSelectChange}>
          <option className={scss["flag-usa"]} value="volvo">
            Volvo
          </option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        {/* Wyświetlenie wybranej wartości */}
        {selectedCar && (
          <div className={scss["selected-value"]}>
            <p>Selected car: {selectedCar}</p>
          </div>
        )}
      </div>
      <div className={scss["container"]}>
        <h2>1. ComboBox - React Select</h2>
        <label htmlFor="cars">Choose a car:</label>
        <Select
          options={carOptions}
          onChange={(selectedOption) => setSelectedCar(selectedOption?.value)}
          defaultValue={carOptions[0]}
          isSearchable={false}
        />
        {/* Wyświetlenie wybranej wartości */}
        {selectedCar && (
          <div className={scss["selected-value"]}>
            <p>Selected car: {selectedCar}</p>
          </div>
        )}
      </div>
      <div className={scss["container3"]}>
        <h2>1. ComboBox - React Select 2</h2>
        <label htmlFor="cars">Choose a car:</label>
        <Select
          options={carOptions}
          onChange={(selectedOption) => {
            if (selectedOption?.value) {
              setSelectedCar(selectedOption.value);
            }
          }}
          defaultValue={carOptions[0]}
          isSearchable={false}
          styles={customStyles}
        />
        {/* Wyświetlenie wybranej wartości */}
        {selectedCar && (
          <div className={scss["selected-value"]}>
            <p>Selected car: {selectedCar}</p>
          </div>
        )}
      </div>
      <div>
        <Select
          defaultValue={selectedOption1}
          onChange={(option) => setSelectedOption1(option)}
          options={options}
        />
        {selectedOption1 && (
          <div className={scss["selected-value"]}>
            <p>Selected car: {selectedOption1.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
