/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our", "my"];
let adj = ["great", "big", "huge"];
let noun = ["jogger", "racoon", "dog"];
let dom = [".com", ".net", ".org"];

console.log(
  pronoun.flatMap(a =>
    adj.flatMap(b => noun.flatMap(c => dom.flatMap(d => a + b + c + d)))
  )
);