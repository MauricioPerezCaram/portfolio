import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_espanol from "./translations/espanol/global.json";
import global_ingles from "./translations/ingles/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "espanol",
  resources: {
    espanol: {
      global: global_espanol,
    },
    ingles: {
      global: global_ingles,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
