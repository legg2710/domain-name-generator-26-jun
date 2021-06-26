/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "huge"];
  let noun = ["jogger", "racoon", "dog"];
  let dom = [".com", ".net", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + dom[l];
          this.document.getElementById("app").innerHTML += domain + "<br>";
        }
      }
    }
  }
};
