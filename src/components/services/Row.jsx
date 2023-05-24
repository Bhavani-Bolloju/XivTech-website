import React from "react";
import classes from "./Row.module.scss";

function Row({ servieH2, serviceH3, serviceLink, serviceImage }) {
  return (
    <div className={classes.row}>
      <div className={classes["row-1"]}>
        <div className={classes["service-description"]}>
          <h2>{servieH2}</h2>
          <img
            src={serviceImage}
            alt={servieH2}
            className={classes["service-image"]}
          />
          <h3>{serviceH3}</h3>
          <div className={classes["service-link"]}>
            <a href="#">
              <p>{serviceLink}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={classes["row-2"]}>
        <img
          src={serviceImage}
          alt={servieH2}
          className={classes["service-image"]}
        />
      </div>
    </div>
  );
}

export default Row;
