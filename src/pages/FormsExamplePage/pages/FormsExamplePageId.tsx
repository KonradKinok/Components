import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ContactFormUpdate } from "../components/ContactFormUpdate/ContactFormUpdate";
import scss from "./FormsExamplePageId.module.scss";
import { AxiosResponse } from "axios";
import { apiClient } from "../components/FunctionsContacts/FunctionsContacts";
import type { Contact } from "../components/FunctionsContacts/FunctionsContacts";

export const FormsExamplePageId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const defaultPage = "/others/FormsExamplePage";
  const backLinkHref = location.state?.from ?? defaultPage;
  const [contact, setContact] = useState<Contact>({
    _id: "", // Pusty string zamiast null
    name: "",
    email: "",
    phone: "",
    favorite: false, // Ustawienie domyślnej wartości boolean
  });
  const [responseAjax, setResponseAjax] = useState({
    status: "",
    statusText: "",
    headers: "",
    config: "",
    request: "",
  });

  useEffect(() => {
    let response: AxiosResponse | null = null;
    const getContacts1 = async () => {
      try {
        response = await apiClient.get(`/contacts/${id}`);
        setContact(response?.data);
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
    <div className={scss["FormsExamplePageId-container"]}>
      <h1>FormsExamplePageId</h1>
      <div className={scss["backlink-page-container"]}>
        <Link to={defaultPage}>⬅️ DefaultPage</Link>
        <Link to={backLinkHref}>⬅️BackPage</Link>
      </div>
      <p>{id}</p>
      <p>{JSON.stringify(location, null, 2)}</p>
      <p>Current path: {location.pathname}</p>
      <p>{JSON.stringify(contact, null, 2)}</p>
      <div className={scss["FormsExamplePageId-contactForm-container"]}>
        <ContactFormUpdate simpleContact={contact} />
      </div>
    </div>
  );
};
