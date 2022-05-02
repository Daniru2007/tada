import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import ListsWidget from "./components/ListsWidget";
function App() {
    return (
        <div className="app">
            <Header />
            <ListsWidget />
        </div>
    );
}

export default App;
