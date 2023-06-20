import React from "react";
import { Link, Route } from "wouter";

import Header from "./components/Header";

import Login from "./pages/Login";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";

import { UserContextProvider } from "./context/UserContext";
import { GifsContextProvider } from "./context/GifsContext";

import "./App.css";

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header>
            <Link to="/">
              <img className="App-logo" alt="Giffy logo" src="/logo.png" />
            </Link>
            <GifsContextProvider>
              <Route component={Home} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={Login} path="/login" />
              <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
            </GifsContextProvider>
          </Header>
        </section>
      </div>
    </UserContextProvider>
  );
}
