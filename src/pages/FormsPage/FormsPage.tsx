import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import scss from "./FormsPage.module.scss";
import canCreateWords from "../KrzyzowkaPage/KrzyzowkaPage";
import {
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import customTheme from "./customTheme";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import { SingleInput, SingleInputB } from "./SimpleInput/SimpleInput";
import { FaUser } from "react-icons/fa";

interface FormValues {
  email: string;
  password: string;
}

export default function FormsPage() {
  //SingleInputData
  const [singleInputValue, setSingleInputValue] = useState<string>("");
  const [singleInputError, setSingleInputError] = useState<string>("");
  const [singleInputValueB, setSingleInputValueB] = useState<string>("");
  const [singleInputErrorB, setSingleInputErrorB] = useState<string>("");

  const handleSingleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentValue = event.target.value;
    const currentName = event.target.name;
    let errorTextInput = "";

    if (currentName === "firstSingleInputName") {
      setSingleInputValue(currentValue);
      if (currentValue.length === 1) {
        errorTextInput = "Za mało liter";
      } else if (!currentValue) {
        errorTextInput = "Musisz wypełnić te pole";
      }
      setSingleInputError(errorTextInput);
    }
  };
  //SingleInputDataB
  useEffect(() => {
    let errorTextInput = "";
    if (singleInputValueB.length === 1) {
      errorTextInput = "Za mało liter";
    } else if (!singleInputValueB) {
      errorTextInput = "Musisz wypełnić te pole";
    }
    setSingleInputErrorB(errorTextInput);
  }, [singleInputValueB]);
  //-----------------SingleInputData

  const [textInInput, setTextInInput] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInInput(event.target.value);
  };

  const containsNumbers = (text: string) => /\d/.test(text);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleInput = (e: Event) => {
      const el = e.target as HTMLInputElement;

      // Sprawdzenie, czy element posiada `data-color`
      if (el && el.matches("[data-color]")) {
        clearTimeout(timer); // Czyszczenie poprzedniego timera
        timer = setTimeout(() => {
          document.documentElement.style.setProperty(
            `--color-${el.dataset.color}`,
            el.value,
          );
        }, 100); // Debounce 100ms
      }
    };

    // Dodanie nasłuchiwacza
    document.addEventListener("input", handleInput);

    // Czyszczenie nasłuchiwacza po odmontowaniu komponentu
    return () => {
      document.removeEventListener("input", handleInput);
      clearTimeout(timer); // Czyszczenie timera, jeśli istnieje
    };
  }, []);

  // Ustalenie wartości początkowych
  const initialValues: FormValues = { email: "", password: "" };

  return (
    <div className={scss["container-forms-page"]}>
      <h1>Forms page</h1>
      <div className={scss["container"]}>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<FormValues> = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div>
        <h2>Text Field Custom 1</h2>
        <div className={scss["card"]}>
          <label className={scss["input"]}>
            <input
              className={scss["input__field"]}
              type="text"
              placeholder=" "
            />
            <span className={scss["input__label"]}>Some Fancy Label</span>
          </label>
          <label className={scss["input"]}>
            <input
              className={scss["input__field"]}
              type="text"
              placeholder=" "
            />
            <span className={scss["input__label"]}>Some Fancy Label</span>
          </label>
        </div>
      </div>
      <div>
        <ThemeProvider theme={customTheme}>
          <TextField
            id="outlined-basic"
            label="Input words"
            variant="outlined"
            helperText={
              containsNumbers(textInInput)
                ? "Input should not contain numbers."
                : "Enter the words you are looking for"
            }
            error={containsNumbers(textInInput)} // Ustawienie błędu, jeśli wartość zawiera liczby
            value={textInInput}
            onChange={handleInputChange} // Obsługa zmiany wartości
            className={scss["mui-text-field-custom"]}
            sx={{
              margin: "20px 0",
              "& .MuiInputBase-input": {
                color: "blue",
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <AbcOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Input words"
            variant="outlined"
            helperText={
              containsNumbers(textInInput)
                ? "Input should not contain numbers."
                : "Enter the words you are looking for"
            }
            error={containsNumbers(textInInput)} // Ustawienie błędu, jeśli wartość zawiera liczby
            value={textInInput}
            onChange={handleInputChange} // Obsługa zmiany wartości
            className={scss["mui-text-field-custom"]}
            sx={{
              margin: "20px 0",
              "& .MuiInputBase-input": {
                color: "blue",
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <FontDownloadOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </ThemeProvider>
      </div>
      <div>
        <p>Single Input</p>
        <SingleInput
          inputName="firstSingleInputName"
          singleInputValue={singleInputValue}
          // setSingleInputValue={setSingleInputValue}
          handleSingleInputChange={handleSingleInputChange}
          inputPlaceholder="Enter your text"
          iconLeft={<FaUser size={16} />}
          singleInputError={singleInputError}
          required={false}
          classNameInputContainer={scss["custom-input-container"]}
        />
        <p>Wartość inputa: {singleInputValue}</p>
        <p>Wartość inputa: {singleInputValue.length}</p>
      </div>
      <div>
        <p>Single Input B</p>
        <SingleInputB
          inputName="firstSingleInputNameB"
          singleInputValue={singleInputValueB}
          setSingleInputValue={setSingleInputValueB}
          // handleSingleInputChange={handleSingleInputChange}
          inputPlaceholder="firstSingleInputNameB"
          iconLeft={<FaUser size={16} />}
          singleInputError={singleInputErrorB}
          // setSingleInputError={setSingleInputError}
          required={false}
          classNameInputContainer={scss["custom-input-container"]}
        />
        <p>Wartość inputa: </p>
        <p>Wartość inputa: </p>
      </div>
    </div>
  );
}
