import React, { useState } from "react";
import scss from "./MuiTextField.module.scss";
import { TextField } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
export const MuiTextField: React.FC = () => {
  const [textInInput, setTextInInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInInput(event.target.value);
  };

  const containsNumbers = (text: string) => /\d/.test(text);

  return (
    // https://mui.com/material-ui/react-text-field/
    <div className={scss["mui-text-field-container-paige"]}>
      <div>
        <h1 className={scss.title}>MuiTextField </h1>
      </div>
      <div className={scss["mui-text-field-container"]}>
        <p>Egzamples text field:</p>
        <div className={scss["mui-text-field-standard-container"]}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <div className={scss["mui-text-field-custom-container"]}>
          <p>Egzamples custom text field:</p>
          <TextField
            id="outlined-basic"
            label="Input name"
            variant="outlined"
            helperText={
              containsNumbers(textInInput)
                ? "Input should not contain numbers."
                : "Enter your name"
            }
            error={containsNumbers(textInInput)} // Ustawienie błędu, jeśli wartość zawiera liczby
            value={textInInput}
            onChange={handleInputChange} // Obsługa zmiany wartości
            className={scss["mui-text-field-custom"]}
            sx={{
              margin: "10px 0",
              "& .MuiInputBase-input": {
                color: "blue",
              },
            }}
            // slotProps={{
            //   input: {
            //     startAdornment: (
            //       <InputAdornment position="start">
            //         <AccountCircle />
            //       </InputAdornment>
            //     ),
            //   },
            // }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        <div className={scss["mui-text-field-custom-container"]}>
          <p>Egzamples custom text field 2:</p>
          <div className={scss["custom-input-container"]}>
            <input
              type="text"
              id="custom-input"
              className={scss["custom-input"]}
              required
            />
            <label htmlFor="custom-input" className={scss["custom-label"]}>
              Outlined
            </label>
          </div>
        </div>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
      </div>
    </div>
  );
};
