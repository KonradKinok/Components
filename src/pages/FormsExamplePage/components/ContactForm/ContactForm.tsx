import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SingleInput } from "../../../FormsPage/SingleInput/SingleInput";
import scss from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [inputName, setInputName] = useState<string>("");
  const [inputNameError, setInputNameError] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputEmailError, setInputEmailError] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputPhoneError, setInputPhoneError] = useState<string>("");
  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;
    const currentName = event.target.name;
    let errorTextInput = "";

    if (currentName === "name") {
      setInputName(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputNameError(errorTextInput);
    }
    if (currentName === "email") {
      setInputEmail(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputEmailError(errorTextInput);
    }
    if (currentName === "phone") {
      setInputPhone(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputPhoneError(errorTextInput);
    }
  };

  return (
    <form className={scss["contact-form"]}>
      <h3 className={scss["contact-form-title"]}>Contact Form</h3>
      <SingleInput
        inputName="name"
        singleInputValue={inputName}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your name"
        iconLeft={<FaUser size={16} />}
        singleInputError={inputNameError}
        required={true}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName="email"
        singleInputValue={inputEmail}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your email"
        iconLeft={<IoIosMail size={24} />}
        singleInputError={inputEmailError}
        required={true}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName="phone"
        singleInputValue={inputPhone}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your phone"
        iconLeft={<FaPhoneAlt size={16} />}
        singleInputError={inputPhoneError}
        required={true}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
