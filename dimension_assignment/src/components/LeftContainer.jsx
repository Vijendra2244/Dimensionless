import React from "react";
import Topleft from "./topleft/Topleft";

import styles from "./LeftContainer.module.css";
import Middle from "./middle/Middle";
import Lower from "./lower/Lower";

function LeftContainer() {
  return (
    <div className={styles.main}>
      <Topleft />
      <Middle />
      <Lower />
    </div>
  );
}

export default LeftContainer;
