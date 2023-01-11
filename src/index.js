import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App"
import CardA from "./components/card-class/CardA";
import CardB from "./components/card-function/CardB";

const x = [1,2,3,4,5,6,7,8,9,10,11]

// const app = document.getElementById("app");
ReactDOM.createRoot(document.getElementById("app"))
.render(
  <div>
    <h1>Hello XYZ</h1>
    <App/>
    <CardA/>
    <CardB role="Software Engineer"
    age={x} name="Albert" image="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-female-battle-royale-flaticons-lineal-color-flat-icons.png"/>
  </div> 
)