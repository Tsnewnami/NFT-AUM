import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
