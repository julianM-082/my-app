import React, {useState} from "react";
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
    
    const [counter, setCounter] = useState(0);

    return <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter+1)}>Sumar</button>
        <button onClick={() => setCounter(counter-1)}>Restar</button>
        <button onClick={() => setCounter(0)}>Reiniciar</button>
    </div>
}

root.render(
    <>
    <Counter/>
    </>

);
