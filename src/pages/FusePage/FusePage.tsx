import React, { useState } from "react";
import scss from "./FusePage.module.scss";
import Fuse from "fuse.js";
import { SingleInput } from "../FormsPage/SimpleInput/SimpleInput";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export const FusePage = () => {
  //SingleInputData
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [searchInputError, setSearchInputError] = useState<string>("");
  const [singleInputValue, setSingleInputValue] = useState<string>("");
  const [singleInputError, setSingleInputError] = useState<string>("");
  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;

    let errorTextInput = "";
    if (event.target.name === "searchInputValue") {
      setSearchInputValue(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setSearchInputError(errorTextInput);
    }
    if (event.target.name === "firstSingleInputName") {
      setSingleInputValue(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setSingleInputError(errorTextInput);
    }
  };

  //-----------------SingleInputData

  return (
    <div className={scss["container-fuse-page"]}>
      <h1>FusePage</h1>
      <div className={scss[""]}>
        <form action="" className={scss["fuse-page-form"]}>
          <p>Formularz</p>
          <SingleInput
            inputName="searchInputValue"
            singleInputValue={searchInputValue}
            setSingleInputValue={setSearchInputValue}
            handleSingleInputChange={handleSingleInputChange}
            inputPlaceholder="Enter text to search"
            iconLeft={<FaSearch size={16} />}
            singleInputError={searchInputError}
            required={false}
            classNameInputContainer={scss["custom-input-container"]}
          />
          <SingleInput
            inputName="firstSingleInputName"
            singleInputValue={singleInputValue}
            setSingleInputValue={setSingleInputValue}
            handleSingleInputChange={handleSingleInputChange}
            inputPlaceholder="Enter your text"
            iconLeft={<FaUser size={16} />}
            singleInputError={singleInputError}
            required={false}
            classNameInputContainer={scss["custom-input-container"]}
          />
        </form>
      </div>
    </div>
  );
};
