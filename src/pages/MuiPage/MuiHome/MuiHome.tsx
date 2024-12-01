import React from "react";
import scss from "./MuiHome.module.scss";

export const MuiHome: React.FC = () => {
  return (
    <div className={scss["mui-home-container"]}>
      <h1 className={scss.title}>{`Components\nmanager\nMuiHome`}</h1>
      <div>
        <h2>MUI steps:</h2>
        <ol className={scss["mui-home-list"]}>
          <li>
            <p>
              1. Instal MUI:
              https://mui.com/material-ui/getting-started/installation/
            </p>
            <p>
              npm install @mui/material @mui/styled-engine-sc styled-components
            </p>
          </li>
          <li>
            <p>2. Instal font Roboto:</p>
            <p>via npm: npm install @fontsource/roboto</p>
            <p>Then you can import it in your entry point like this:</p>
            <p>
              {`import '@fontsource/roboto/300.css';\nimport '@fontsource/roboto/400.css';\nimport '@fontsource/roboto/500.css';\nimport '@fontsource/roboto/700.css';`}
            </p>
            <p>or</p>
            <p>{`via <head>:`}</p>
            <p>
              {`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>`}
            </p>
          </li>
          <li>
            <p>3. Instal Icons:</p>
            <p>npm install @mui/icons-material</p>
            <p>and in head</p>
            <pre>
              &lt;link rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"/&gt;
            </pre>
          </li>
        </ol>
      </div>
    </div>
  );
};
