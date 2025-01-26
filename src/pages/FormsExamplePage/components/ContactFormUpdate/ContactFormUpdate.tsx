import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SingleInput } from "../../../FormsPage/SingleInput/SingleInput";
import scss from "./ContactFormUpdate.module.scss";
import type { Contact } from "../FunctionsContacts/FunctionsContacts";
interface ContactFormUpdateProps {
  simpleContact: Contact;
}
export const ContactFormUpdate = ({
  simpleContact,
}: ContactFormUpdateProps) => {
  const [inputId, setInputId] = useState<string>("");
  const [inputIdError, setInputIdError] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [inputNameError, setInputNameError] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputEmailError, setInputEmailError] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputPhoneError, setInputPhoneError] = useState<string>("");
  const [checkboxFavorite, setCheckboxFavorite] = useState<boolean>(false);
  useEffect(() => {
    if (simpleContact) {
      setInputId(simpleContact._id || ""); // Ustawienie wartości id
      setInputName(simpleContact.name || ""); // Ustawienie wartości name
      setInputEmail(simpleContact.email || ""); // Ustawienie wartości email
      setInputPhone(simpleContact.phone || ""); // Ustawienie wartości phone
      setCheckboxFavorite(simpleContact.favorite || false);
    }
  }, [simpleContact]); // Tylko wtedy, gdy `simpleContact` się zmieni

  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentName = event.target.name;
    const currentValue =
      currentName === "favorite" ? event.target.checked : event.target.value;

    let errorTextInput = "";
    if (typeof currentValue === "string") {
      if (currentName === "id") {
        setInputId(currentValue as string);
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
    }
    if (typeof currentValue === "boolean") {
      if (currentName === "favorite") {
        setCheckboxFavorite(currentValue);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Pobierz token z localStorage (lub innego źródła)

    if (!token) {
      throw new Error("No token found");
    }
    try {
      const response = await fetch(
        `http://localhost:3000/api/contacts/${inputId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Dodaj token do nagłówka
          },
          body: JSON.stringify({
            name: inputName,
            email: inputEmail,
            phone: inputPhone,
            favorite: checkboxFavorite,
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
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token"); // Pobierz token z localStorage (lub innego źródła)

      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(
        `http://localhost:3000/api/contacts/${inputId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Dodaj token do nagłówka
          },
        },
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Contact deleted:", result);
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error(errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleFavorite = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/contacts/${inputId}/favorite`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            favorite: checkboxFavorite,
          }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Favorite updated:", result);
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
      <label htmlFor="favorite">
        <p className={scss["custom-title"]}>Favorite:</p>
      </label>
      <input
        type="checkbox"
        name="favorite"
        id="radio-sold"
        className={scss["toggle-switch"]}
        checked={checkboxFavorite} // Ustawienie, czy input jest zaznaczony
        onChange={handleSingleInputChange}
      />
      <button className={scss["button-submit"]} type="submit">
        Submit
      </button>
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleDelete}>
        Delete
      </button>
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleFavorite}>
        Favorite
      </button>
    </form>
  );
};
