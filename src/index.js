import React, { useState } from "react";
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

    const [message, setMessage] = useState('');

    return <div>
        <input onChange={e => setMessage(e.target.value)}/>
        <button onClick={() => {
            alert(message)
        }}>Save</button>
    </div>
}

root.render(
    <>
        <Counter />
    </>

);
