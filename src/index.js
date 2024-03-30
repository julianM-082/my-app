import React from "react";
import ReactDOM from "react-dom/client";

// ------COMPONENTES------
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { Task } from "./Task";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (event)=>{
    console.log(event.target.value);
};

root.render(
    <>
        <Task ready= {true} />
        <Saludar />
        <Button text="Saludar"/>
        <input id ="input"  onChange={handleChange} />
        
        
    </>

);
