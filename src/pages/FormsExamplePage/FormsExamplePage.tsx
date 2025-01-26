import React, { useEffect, useState } from "react";
import scss from "./FormsExamplePage.module.scss";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactFormLogin } from "./components/ContactFormLogin/ContactFormLogin";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { apiClient } from "./components/FunctionsContacts/FunctionsContacts";
import axios, { AxiosResponse, AxiosInstance } from "axios";
import type { Contact } from "./components/FunctionsContacts/FunctionsContacts";
export const FormsExamplePage = () => {
  const location = useLocation();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [responseAjax, setResponseAjax] = useState({
    status: "",
    statusText: "",
    headers: "",
    config: "",
    request: "",
  });
  const fakeId = "12";

  const getContacts = async () => {
    try {
      const token = localStorage.getItem("token"); // Pobierz token z localStorage (lub innego źródła)
      console.log("token", token);
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://localhost:3000/api/contacts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Dodaj token do nagłówka
        },
      });

      if (response.ok) {
        const result = await response.json();
        setContacts(result);
        console.dir(result, { colors: true, depth: null });
      } else {
        const errorData = await response.json(); // Pobranie treści odpowiedzi z błędem
        console.error(errorData.message); // Wyświetlenie szczegółowego komunikatu błędu
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    let response: AxiosResponse | null = null;
    const getContacts1 = async () => {
      try {
        response = await apiClient.get("/contacts/");
        setContacts(response?.data);
      } catch (error: any) {
        console.error(
          "Error fetching contacts:",
          error.response?.data?.message || error.message,
        );
      } finally {
        setResponseAjax({
          status: response?.status?.toString() || "Error",
          statusText: response?.statusText || "Unknown",
          headers: JSON.stringify(response?.headers || {}, null, 2),
          config: JSON.stringify(response?.config || {}, null, 2),
          request: response?.request ? response.request.responseURL : "",
        });
      }
    };
    getContacts1();
  }, []);

  return (
    <div className={scss["FormsExamplePage-container"]}>
      <div className={scss["FormsExamplePage-contactForm-container"]}>
        <ContactFormLogin />
      </div>
      <Link
        className={scss["image-gallery-item"]}
        to={fakeId}
        state={{ from: location }}>
        Link to ID
      </Link>
      <button type="button" onClick={getContacts}>
        Pobierz kontakty
      </button>
      <div className={scss["image-gallery-item"]}>
        {contacts &&
          contacts.map((contact) => (
            <div key={contact._id}>
              <Link
                className={scss["link-gallery-item"]}
                to={contact._id || ""}
                state={{ from: location }}>
                To ID
              </Link>
              <Link
                className={scss["link-gallery-item"]}
                to={`${contact._id}/favorite` || ""}
                state={{ from: location }}>
                To Favorite
              </Link>
              <ContactDetails {...contact} />
            </div>
          ))}
      </div>
      <div className={scss["responseAjax-container"]}>
        <p className={scss["responseAjax-container"]}>
          Config: {responseAjax.config}
        </p>
        <p>Headers: {responseAjax.headers}</p>
        <p>Request: {responseAjax.request}</p>
        <p>Status: {responseAjax.status}</p>
        <p>Status text: {responseAjax.statusText}</p>
        <pre className={scss["responseAjax-container"]}>
          {JSON.stringify(responseAjax, null, 2)}
        </pre>
      </div>
      <div className={scss["FormsExamplePage-contactForm-container"]}>
        <ContactForm />
      </div>
    </div>
  );
};
