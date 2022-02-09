import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ItchProvider } from "./useItch";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ItchProvider
      itchIoClientId="yourClientId"
      scope="profile:me"
      redirect_uri="myRedirectUri"
    >
      <App />
    </ItchProvider>
  </StrictMode>,
  rootElement
);
