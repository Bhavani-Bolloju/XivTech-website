import React from "react";
import classes from "./Services.module.scss";
import Row from "./Row";

function Services() {
  return (
    <section className={classes.services}>
      <Row
        servieH2="AI + RPA is what we do"
        serviceH3="Future-Proof your business. Drive efficiency, profitability and
            deliver on customer experience"
        serviceImage="https://www.xivtech.io./rp2.jpg"
        serviceLink="AI + RPA Automation"
      />
      <Row
        servieH2="Make Bolder Choices"
        serviceH3="Digital focused strategies to realize market-changing ideas"
        serviceImage="https://www.xivtech.io./p1.png"
        serviceLink="Build Better Apps"
      />
      <Row
        servieH2="Innovate with Speed"
        serviceH3="Create higher quality software, deliver on customer expectations and business goals"
        serviceImage="https://www.xivtech.io./p2.jpg"
        serviceLink="DevOps"
      />
      <Row
        servieH2="Embrace Cloud"
        serviceH3="With Cloud-First accelerate innovation and optimize performance"
        serviceImage="https://www.xivtech.io./p3.jpg"
        serviceLink="Cloud Services"
      />
    </section>
  );
}

export default Services;
