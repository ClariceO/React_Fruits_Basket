import React from "react";
import ReactDOM from "react-dom";

const fruits = [
  "Apple",
  "Orange",
  "Banana",
  "Watermelon",
  "Pear",
  "Kiwi",
  "Strawberry"
];
const noOfFruits = Math.ceil(Math.random() * fruits.length);

const fruitsbasket = (
  <>
    <h1>My Fruits Basket</h1>
    <p>is {noOfFruits > 4 ? "pretty full" : "quite empty"} today</p>
    <ul>
      {fruits.slice(0, noOfFruits).map((elem) => (
        <li key={elem}>{elem}</li>
      ))}
    </ul>
  </>
);
//attaching JXS to the root id in index.html
ReactDOM.render(fruitsbasket, document.getElementById("root"));
//const root = createRoot(rootElement);

//root.render(
//<StrictMode>
//<App/>
//</StrictMode>
//);
