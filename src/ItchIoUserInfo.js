import React from "react";
import useItch from "./lib/component/useItch";

export default function ItchIoUserInfo(props){

    const {user} = useItch();

    return(<>
        {user.isLogged ? (
        <div>
          <p>Welcome {user.data.display_name}</p>
          {user.data.gamer ? <p>You are a Gamer.</p> : null}
          {user.data.developer ? <p>You are a Game Designer.</p> : null}
          {user.data.press_user ? <p>You are an Influencer.</p> : null}
        </div>
      ) : null}
    </>)
}