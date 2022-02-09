import React from "react";
import { useItch } from "./useItch";
import "./styles.css";

export default function App() {
  const { user } = useItch();

  return (
    <div className="App">
      <h1>useItch Test Project</h1>
      {user.isLogged ? (
        <button onClick={user.logOut}>Log Out</button>
      ) : (
        <button onClick={user.logIn}>Log In with Itch.io</button>
      )}
      {user.isLogged ? (
        <div>
          <p>Welcome {user.data.display_name}</p>
          {user.data.gamer ? <p>You are a Gamer.</p> : null}
          {user.data.developer ? <p>You are a Game Designer.</p> : null}
          {user.data.press_user ? <p>You are an Influencer.</p> : null}
        </div>
      ) : null}
    </div>
  );
}
