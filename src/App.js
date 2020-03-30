import React from "react";
import "./styles.css";
import LandingPage from "./LandingPage";
import AppLayout from "./AppLayout";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}
