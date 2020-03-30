import React from "react";
import Auth from "./Auth";

const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          Auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LandingPage;
