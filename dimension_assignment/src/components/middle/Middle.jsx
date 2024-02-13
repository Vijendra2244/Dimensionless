import React from "react";
import MiddleLeft from "../middleleft/MiddleLeft";
import MiddleRight from "../middleright/MiddleRight";
import styles from "./Middle.module.css"

function Middle() {
  return (
    <div className={styles.middle}>
      <MiddleLeft />
      <MiddleRight />
    </div>
  );
}

export default Middle;
