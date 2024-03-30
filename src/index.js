import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Button text= "Click me"/>
        <Button text = "Pay"/>
        <Button text = "3000"/>
        {/* <UserCard
            name="Carlos"
            amount={1000}
            married={true}
            points = {[10, 20, 30, 40]} 
            address={{ street: "123 Street", city: "New York" }}
            greet = {()=>{alert('hello')}}
        />

        <UserCard
            name= "Juan Carlos"
            amount= {1000}
            married= {false}
            address={{street: "juan Street", city: "Miami"}}
            points = {[10,20]}
        /> */}
    </>
);
