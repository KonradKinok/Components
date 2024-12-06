import React, { useState } from "react";
import scss from "./MuiTextField.module.scss";
import {
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export const MuiTextField: React.FC = () => {
  const [textInInput, setTextInInput] = useState("");

  //Input password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  //-------------Input password

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
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        <div>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
          </Box>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Text Field
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};
