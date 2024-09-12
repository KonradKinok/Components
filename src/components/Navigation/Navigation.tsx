import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./Navigation.module.scss";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/language/sliceLanguage";
import { selectLanguage } from "../../redux/language/selectorsLanguage";
import { Languages, langDictionary } from "../../redux/language/constans";
import { GiWhiteBook } from "react-icons/gi";
export const Navigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector(selectLanguage);

  const handleChangeLanguage = () => {
    const newLanguage =
      currentLanguage === Languages.EN ? Languages.PL : Languages.EN;
    dispatch(setLanguage(newLanguage));
  };
  return (
    <nav className={scss.nav}>
      <div className={scss.title}>
        <GiWhiteBook size={50} />
        <p>{langDictionary.navComponents[currentLanguage as Languages]}</p>
      </div>
      <a className={scss.lang} onClick={handleChangeLanguage}>
        {currentLanguage}
      </a>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? scss.active : "")}>
        {langDictionary.navHome[currentLanguage as Languages]}
      </NavLink>

      <NavLink
        to="/components"
        className={({ isActive }) => (isActive ? scss.active : "")}>
        {langDictionary.navComponents[currentLanguage as Languages]}
      </NavLink>
      <NavLink
        to="/others"
        className={({ isActive }) => (isActive ? scss.active : "")}>
        {langDictionary.navOthers[currentLanguage as Languages]}
      </NavLink>
    </nav>
  );
};
