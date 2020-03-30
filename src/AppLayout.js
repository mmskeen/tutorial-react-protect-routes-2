import React from "react";
import Auth from "./Auth";

const AppLayout = props => {
  return (
    <div>
      <h1>App Layout</h1>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AppLayout;
