import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SingleInput } from "../../../FormsPage/SingleInput/SingleInput";
import scss from "./ContactFormLogin.module.scss";

export const ContactFormLogin = () => {
  const fieldNames = { name: "name", email: "email", password: "password" };
  const [inputName, setInputName] = useState<string>("Konrad");
  const [inputNameError, setInputNameError] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("konrad@gmail.com");
  const [inputEmailError, setInputEmailError] = useState<string>("");
  const [inputPassword, setInputPassword] =
    useState<string>("HasloComponents1");
  const [inputPasswordError, setInputPasswordError] = useState<string>("");
  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;
    const currentName = event.target.name;
    let errorTextInput = "";

    if (currentName === fieldNames.name) {
      setInputName(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputNameError(errorTextInput);
    }
    if (currentName === fieldNames.email) {
      setInputEmail(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputEmailError(errorTextInput);
    }
    if (currentName === fieldNames.password) {
      setInputPassword(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setInputPasswordError(errorTextInput);
    }
  };
  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User added:", result);
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error(errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          email: inputEmail,
          phone: inputPassword,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Contact added:", result);
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
      <h3 className={scss["contact-form-title"]}>Contact Form - login</h3>
      <SingleInput
        inputName={fieldNames.name}
        singleInputValue={inputName}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your name"
        iconLeft={<FaUser size={16} />}
        singleInputError={inputNameError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName={fieldNames.email}
        singleInputValue={inputEmail}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your email"
        iconLeft={<IoIosMail size={24} />}
        singleInputError={inputEmailError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <SingleInput
        inputName={fieldNames.password}
        singleInputValue={inputPassword}
        handleSingleInputChange={handleSingleInputChange}
        inputPlaceholder="Enter your phone"
        iconLeft={<FaPhoneAlt size={16} />}
        singleInputError={inputPasswordError}
        required={false}
        classNameInputContainer={scss["custom-input-container"]}
      />
      <button className={scss["button-submit"]} type="button">
        LogIn
      </button>
      <button className={scss["button-submit"]} type="button">
        LogOut
      </button>
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};
