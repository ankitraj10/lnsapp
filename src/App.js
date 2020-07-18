import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import PlayCard from "./pages/PlayCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute path="/videoPlay" exact component={PlayCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
