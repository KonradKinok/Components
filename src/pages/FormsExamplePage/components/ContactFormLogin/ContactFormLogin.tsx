import React, { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SingleInput } from "../../../FormsPage/SingleInput/SingleInput";
import scss from "./ContactFormLogin.module.scss";

export const ContactFormLogin = () => {
  const fieldNames = { name: "name", email: "email", password: "password" };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [avatar, setAvatar] = useState<string>("");
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
        setAvatar(`${result.avatarURL}`);
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error(errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
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
        console.log("Logged in successfully. Response:", result.data);
        const { token, user } = result.data;

        localStorage.setItem("token", token); // Zapisz token w localStorage
        console.log("Logged in successfully. Token saved:", token);
        if (user.avatarURL && user.avatarURL.startsWith("https://")) {
          setAvatar(`${user.avatarURL}`);
        } else {
          setAvatar(`http://localhost:3000${user.avatarURL}`);
        }
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error(errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleLogOut = async () => {
    try {
      const token = localStorage.getItem("token"); // Pobierz token z localStorage

      if (!token) {
        throw new Error("No token found"); // Jeśli brak tokena, zgłoś błąd
      }

      const response = await fetch("http://localhost:3000/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Przekaż token w nagłówku
        },
      });

      if (response.ok) {
        // Wylogowanie zakończone sukcesem
        localStorage.removeItem("token"); // Usuń token z localStorage
        setAvatar(""); // Usuń avatar
        console.log("Logged out successfully");
      } else {
        const errorData = await response.json(); // Pobierz treść błędu
        console.error("Error during logout:", errorData.message); // Wyświetl komunikat błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleCheckAuth = async () => {
    try {
      const token = localStorage.getItem("token"); // Pobierz token z localStorage (lub innego źródła)

      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:3000/api/users/current", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Dodaj token do nagłówka
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Token is valid. Response:", result);
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error("Error:", errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]); // Zapisz wybrany plik w stanie
    }
  };
  const handleSendAvatar = async () => {
    if (!selectedFile) {
      console.error("No file selected!");
      return;
    }

    try {
      const token = localStorage.getItem("token"); // Pobierz token z localStorage

      if (!token) {
        throw new Error("No token found");
      }

      // Utwórz obiekt FormData i dodaj plik
      const formData = new FormData();
      formData.append("avatar", selectedFile); // 'avatar' to nazwa klucza backendowego dla pliku

      const response = await fetch("http://localhost:3000/api/users/avatars", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`, // Dodaj token do nagłówka
        },
        body: formData, // Dołącz FormData jako body
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Avatar uploaded successfully. Response:", result);
        setAvatar(`http://localhost:3000${result.avatarURL}`);
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error("Error:", errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error: any) {
      console.error("Error:", error.message);
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
          password: inputPassword,
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
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleLogin}>
        LogIn
      </button>
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleLogOut}>
        LogOut
      </button>
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleRegister}>
        Register
      </button>
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleCheckAuth}>
        Check Auth
      </button>
      <input
        type="file"
        name="avatar"
        onChange={handleFileChange}
        accept="image/*"
      />
      <button
        className={scss["button-submit"]}
        type="button"
        onClick={handleSendAvatar}>
        Upload Avatar
      </button>
      <div>
        <img src={avatar} alt="" />
      </div>

      <a href={avatar}>{avatar}</a>
    </form>
  );
};
