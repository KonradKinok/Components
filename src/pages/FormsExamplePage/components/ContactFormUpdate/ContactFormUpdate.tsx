import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SingleInput } from "../../../FormsPage/SingleInput/SingleInput";
import scss from "./ContactFormUpdate.module.scss";

export const ContactFormUpdate = () => {
  const [inputId, setInputId] = useState<string>("BeWfJy-GwNiwFD6lZRKlY");
  const [inputIdError, setInputIdError] = useState<string>("");
  const [inputName, setInputName] = useState<string>("Marek");
  const [inputNameError, setInputNameError] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("Marek@gmail.com");
  const [inputEmailError, setInputEmailError] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("11111111");
  const [inputPhoneError, setInputPhoneError] = useState<string>("");
  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;
    const currentName = event.target.name;
    let errorTextInput = "";
    if (currentName === "id") {
      setInputId(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputIdError(errorTextInput);
    }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/contacts/${inputId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputName,
            email: inputEmail,
            phone: inputPhone,
          }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Contact updated:", result);
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error(errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form className={scss["contact-form"]} onSubmit={handleSubmit}>
      <h3 className={scss["contact-form-title"]}>Contact Form - update</h3>
      <SingleInput
        inputName="id"
        singleInputValue={inputId}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter contact Id"
        iconLeft={<FaUser size={16} />}
        singleInputError={inputIdError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName="name"
        singleInputValue={inputName}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your name"
        iconLeft={<FaUser size={16} />}
        singleInputError={inputNameError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName="email"
        singleInputValue={inputEmail}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your email"
        iconLeft={<IoIosMail size={24} />}
        singleInputError={inputEmailError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName="phone"
        singleInputValue={inputPhone}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your phone"
        iconLeft={<FaPhoneAlt size={16} />}
        singleInputError={inputPhoneError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <button className={scss["button-submit"]} type="submit">
        Submit
      </button>
    </form>
  );
};
