import React from "react";
import LeftLower from "../leftlower/LeftLower";
import styles from "./Lower.module.css";
import RigthLower from "../rightlower/RigthLower";

function Lower() {
  return (
    <div className={styles.lower}>
      <LeftLower />
      <RigthLower/>
    </div>
  );
}

export default Lower;
