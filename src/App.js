import React from "react";
import useItch from "./lib/component/useItch";
import ItchProvider from "./lib/component/ItchProvider";
import ItchIoLoginButton from "./ItchIoLoginButton";
import ItchIoUserInfo from "./ItchIoUserInfo";
import "./styles.css";

export default function App() {
  const { user } = useItch();

  return (
    <ItchProvider
      itchIoClientId="yourClientId"
      scope="profile:me"
      redirect_uri="myRedirectUri"
    >
      <div className="App">
        <ItchIoLoginButton LogInText="Log In with Itch.io" LogOutText="Log Out From Itch.io" />
        <ItchIoUserInfo />
      </div>
    </ItchProvider>
  );
}
