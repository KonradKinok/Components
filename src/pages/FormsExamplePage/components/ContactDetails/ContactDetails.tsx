import React from "react";
import type { Contact } from "../FunctionsContacts/FunctionsContacts";
import scss from "./ContactDetails.module.scss";

export const ContactDetails = ({
  _id,
  name,
  email,
  phone,
  favorite,
}: Contact) => {
  return (
    <div className={scss["contact-detail-container"]}>
      <p>{_id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{favorite.toString()}</p>
    </div>
  );
};
