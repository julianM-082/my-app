import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// ------COMPONENTES------
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { Task } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
        <Counter />
    </>

);
