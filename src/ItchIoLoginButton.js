import React from "react";
import useItch from "./lib/component/useItch";

export default function ItchIoLoginButton(props){

    const { LogInText, LogOutText} = props

    const { user } = useItch();

    return (<>
       
        {user.isLogged ? (
            <button onClick={user.logOut}>{LogOutText}</button>
          ) : (
            <button onClick={user.logIn}>{LogInText}</button>
          )}
        
    </>);
}