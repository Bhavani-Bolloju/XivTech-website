import React from "react";
import classes from "./Collaborate.module.scss";
import Services from "../services/Services";

function Collaborate() {
  return (
    <section className={classes["collaborate"]}>
      <h4>let's collaborate</h4>
      <Services />
    </section>
  );
}

export default Collaborate;
