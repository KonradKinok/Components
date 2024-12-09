import React, { useEffect, useRef, useState } from "react";
import scss from "./SimpleInput.module.scss";
import { RxCross1 } from "react-icons/rx";
import { RxLetterCaseUppercase } from "react-icons/rx";

interface SingleInputInterface {
  inputType?: string;
  inputName?: string;
  required?: boolean;
  singleInputValue: string;
  setSingleInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputPlaceholder: string;
  iconLeft?: React.ReactNode;
  singleInputError?: string;
  handleSingleInputChange: any;
  classNameInputContainer?: string;
}

export const SingleInput: React.FC<SingleInputInterface> = ({
  inputType = "text",
  inputName = "defaultInputName",
  singleInputValue,
  setSingleInputValue,
  inputPlaceholder,
  iconLeft = <RxLetterCaseUppercase size={24} />,
  singleInputError = "",
  handleSingleInputChange,
  required = false,
  classNameInputContainer = "",
}) => {
  const inputRef1 = useRef<HTMLInputElement>(null); // Ref do inputa

  const handleIconClick = () => {
    setSingleInputValue("");
  };
  // Ustawienie dynamicznej klasy
  const containerClassName =
    `${classNameInputContainer} ${scss["input-container"]}`.trim();

  return (
    <>
      <div className={containerClassName}>
        <label className={scss["input-label"]}>
          <input
            ref={inputRef1}
            type={inputType}
            name={inputName}
            placeholder=" "
            value={singleInputValue}
            onChange={handleSingleInputChange}
            required={required}
            className={`${scss["input"]} ${singleInputError ? scss["input-error"] : ""}`}
          />
          <span className={scss["input-placeholder"]}>{inputPlaceholder}</span>
          <span className={`${scss["icons-input-left"]} `}>{iconLeft}</span>
          {singleInputValue && (
            <span
              className={`${scss["icons-input-right"]} `}
              onClick={handleIconClick}>
              <RxCross1 className={scss["icon"]} />
            </span>
          )}
          {singleInputError && (
            <div className={`${scss["tooltip"]} ${scss["error"]}`}>
              {singleInputError}
            </div>
          )}
        </label>
      </div>
    </>
  );
};
