import React from "react";
import useItch from "./lib/component/useItch";
import ItchProvider from "./lib/component/ItchProvider";
import ItchIoLoginButton from "./ItchIoLoginButton";
import ItchIoUserInfo from "./ItchIoUserInfo";
import "./styles.css";

export default function App() {

  return (
    <ItchProvider
      itchIoClientId="yourClientId"
      scope="profile:me"
      redirect_uri="myRedirectUri"
    >
      <div className="App">
        <h1>Itch.io Test App</h1>
        <ItchIoLoginButton LogInText="Log In with Itch.io" LogOutText="Log Out From Itch.io" />
        <ItchIoUserInfo />
      </div>
    </ItchProvider>
  );
}
