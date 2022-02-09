import React, { useState, useEffect, createContext, useContext } from "react";

const ItchContext = createContext();

function ItchProvider(props) {
  const { itchIoClientId, scope, redirect_uri } = props;

  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const [accessToken, setAccessToken] = useState("");

  //useEffect for URI callback
  useEffect(() => {
    if (window.location.href.startsWith(redirect_uri) && window.location.hash) {
      setIsLoading(true);
      setAccessToken(window.location.hash.replace("#access_token=", ""));
      window.history.replaceState({}, "", redirect_uri);
    }
  }, []);

  useEffect(() => {
    if (accessToken !== "") {
      console.log(`useEffect for fetching data`);
      fetch("https://itch.io/api/1/" + accessToken + "/me")
        .then((response) =>
          response.json().then((data) => setUserData(data.user))
        )
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [accessToken]);

  useEffect(() => {
    if (!isLoading && accessToken !== "") setIsLogged(true);
  }, [isLoading, accessToken]);

  function logIn() {
    window.location.href =
      "https://itch.io/user/oauth?client_id=" +
      itchIoClientId +
      "&scope=" +
      encodeURIComponent(scope) +
      "&response_type=token" +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri);
  }

  function logOut() {
    console.log(`log out`);
    setIsLogged(false);
    setAccessToken("");
    setUserData({});
  }

  const itchUser = {
    isLogged: isLogged,
    isLoading: isLoading,
    logIn: logIn,
    logOut: logOut,
    data: userData
  };

  const value = {
    user: itchUser
  };

  console.log(`value is`);
  console.log(value);

  return (
    <ItchContext.Provider value={value}>{props.children}</ItchContext.Provider>
  );
}

function useItch() {
  return useContext(ItchContext);
}

export { useItch, ItchProvider };
