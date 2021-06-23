/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "huge"];
  let noun = ["jogger", "racoon", "dog"];
  let dom = [".com", ".net", ".org"];

  let randomain = Math.floor(Math.random() * 3);

  let domain =
    pronoun[randomain] + adj[randomain] + noun[randomain] + dom[randomain];

  console.log(domain);
};
