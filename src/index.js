import React from "react";
import ReactDOM from "react-dom/client";

// ------COMPONENTES------
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { Task } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
    let counter = 0;

    return <div>
        <h1>Counter: {counter}</h1>
        <button>Sumar</button>
    </div>
}

root.render(
    <>
    <Counter/>
    </>

);
