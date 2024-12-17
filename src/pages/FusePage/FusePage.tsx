import React, { useEffect, useState } from "react";
import scss from "./FusePage.module.scss";
import Fuse, { IFuseOptions, FuseResult } from "fuse.js";
import { SingleInput } from "../FormsPage/SimpleInput/SimpleInput";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {
  listEgzampleObject,
  fuseOptions,
  fuseOptionsContacts,
  contacts,
  type Book,
  type Contact,
} from "./egzample";

export const FusePage = () => {
  //SingleInputData
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [searchInputError, setSearchInputError] = useState<string>("");
  const [searchContactsValue, setSearchContactsValue] = useState<string>("");
  const [singleInputError, setSingleInputError] = useState<string>("");
  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;

    let errorTextInput = "";
    if (event.target.name === "searchInputValue") {
      setSearchInputValue(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setSearchInputError(errorTextInput);
    }
    if (event.target.name === "firstSingleInputName") {
      setSearchContactsValue(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setSingleInputError(errorTextInput);
    }
  };
  //-----------------SingleInputData
  const [findedObjectTable, setFindedObjectTable] = useState<
    FuseResult<Book>[]
  >([]);
  const [findedContactsTable, setFindedContactsTable] = useState<
    FuseResult<Contact>[]
  >([]);
  useEffect(() => {
    const temp = searchFuse(searchInputValue, listEgzampleObject, fuseOptions);
    setFindedObjectTable(temp);
    console.log({ temp });
  }, [searchInputValue]);

  useEffect(() => {
    const searchContactsTable = searchFuse(
      searchContactsValue,
      contacts,
      fuseOptionsContacts,
    );
    setFindedContactsTable(searchContactsTable);
    console.log({ temp: searchContactsTable });
  }, [searchContactsValue]);

  return (
    <div className={scss["container-fuse-page"]}>
      <h1>FusePage</h1>
      <div className={scss[""]}>
        <form action="" className={scss["fuse-page-form"]}>
          <p>Formularz</p>
          <SingleInput
            inputName="searchInputValue"
            singleInputValue={searchInputValue}
            // setSingleInputValue={setSearchInputValue}
            handleSingleInputChange={handleSingleInputChange}
            inputPlaceholder="Enter text to search"
            iconLeft={<FaSearch size={16} />}
            singleInputError={searchInputError}
            required={false}
            classNameInputContainer={scss["custom-input-container"]}
          />
          <SingleInput
            inputName="firstSingleInputName"
            singleInputValue={searchContactsValue}
            // setSingleInputValue={setSearchContactsValue}
            handleSingleInputChange={handleSingleInputChange}
            inputPlaceholder="Enter your text"
            iconLeft={<FaUser size={16} />}
            singleInputError={singleInputError}
            required={false}
            classNameInputContainer={scss["custom-input-container"]}
          />
        </form>
      </div>
      <div>
        <ol className={scss["container-numbered-list"]}>
          {findedObjectTable.map((object) => (
            <ul
              key={object.refIndex}
              className={scss["container-unnumbered-list"]}>
              <li>{object.item.title}</li>
              <li>
                {object.item.author.firstName} {object.item.author.lastName}
              </li>
              <li>Score: {object.score}</li>
            </ul>
          ))}
        </ol>
        {findedObjectTable.map((result, index) => (
          <li key={index}>
            {result.matches?.map((match, idx) => {
              const fieldValue = getValueByPath(result.item, match.key || "");
              return (
                <div key={idx}>
                  <strong>
                    {match.key === "title"
                      ? "Tytuł"
                      : match.key === "author.firstName"
                        ? "Imię autora"
                        : match.key === "author.lastName"
                          ? "Nazwisko autora"
                          : match.key}
                    :
                  </strong>{" "}
                  {highlightText(fieldValue || "", match.indices)}
                </div>
              );
            })}
          </li>
        ))}
      </div>
      <div>
        <ol className={scss["container-numbered-list"]}>
          {findedContactsTable.map((object) => (
            <ul
              key={object.refIndex}
              className={scss["container-unnumbered-list"]}>
              <li>{object.item.name}</li>
              <li>{object.item.number}</li>
              <li>Score: {object.score}</li>
            </ul>
          ))}
        </ol>
        {findedContactsTable.map((result, index) => (
          <li key={index}>
            {result.matches?.map((match, idx) => {
              const fieldValue = getValueByPath(result.item, match.key || "");
              return (
                <div key={idx}>
                  <strong>
                    {match.key === "name"
                      ? "Nazwa"
                      : match.key === "number"
                        ? "Numer"
                        : match.key}
                    :
                  </strong>{" "}
                  {highlightText(fieldValue || "", match.indices)}
                </div>
              );
            })}
          </li>
        ))}
      </div>
    </div>
  );
};

function searchFuse<T>(
  searchInputValue: string,
  listEgzampleObject: T[],
  fuseOptions: IFuseOptions<T>,
) {
  const fuse = new Fuse(listEgzampleObject, fuseOptions);
  const searchPattern = searchInputValue;

  return fuse.search(searchPattern);
}

function highlightText(
  text: string | undefined,
  indices: ReadonlyArray<ReadonlyArray<number>>, // Zmiana tutaj
): JSX.Element {
  const safeText: string = text || "";

  const fragments: JSX.Element[] = [];
  let lastIndex = 0;

  indices.forEach(([start, end], idx) => {
    if (start > lastIndex) {
      fragments.push(
        <span key={`before-${idx}`}>{safeText.slice(lastIndex, start)}</span>,
      );
    }
    fragments.push(
      <mark key={`match-${idx}`}>{safeText.slice(start, end + 1)}</mark>,
    );
    lastIndex = end + 1;
  });

  if (lastIndex < safeText.length) {
    fragments.push(<span key="after">{safeText.slice(lastIndex)}</span>);
  }

  return <>{fragments}</>;
}

function getValueByPath(obj: any, path: string): string {
  const value = path.split(".").reduce((acc, key) => acc && acc[key], obj);
  return value !== undefined ? value : ""; // Zwróci pusty string, jeśli wartość jest undefined
}
