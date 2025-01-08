import React, { useEffect, useState } from "react";
import scss from "./FormsExamplePage.module.scss";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactFormUpdate } from "./components/ContactFormUpdate/ContactFormUpdate";
export const FormsExamplePage = () => {
  return (
    <div className={scss["FormsExamplePage-container"]}>
      <div className={scss["FormsExamplePage-contactForm-container"]}>
        <ContactForm />
      </div>
      <div className={scss["FormsExamplePage-contactForm-container"]}>
        <ContactFormUpdate />
      </div>
    </div>
  );
};
