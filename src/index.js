import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, {NavBar} from './Product'

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <>
        <Greeting title ="Mundo" name = "Julian"/>
        <Greeting title = "React" name = "Juan"/>
        <Greeting title = "JavaScript" name = "Carlos"/>
        <Greeting title = "Julian"/>

    </>
);
