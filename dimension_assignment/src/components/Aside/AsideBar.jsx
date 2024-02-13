import React from "react";
import styles from "../Aside/Aside.module.css";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaCreativeCommonsNc } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import { MdOutlineNotificationsActive, MdCall } from "react-icons/md";

function AsideBar() {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>TRADEVERSE</h2>
      <p className={styles.menu}>MAIN MENU</p>
      <div className={styles.optionContainer}>
        <p className={styles.options}>
          <FaEarthAfrica className={styles.icon}></FaEarthAfrica>News Quant
        </p>
        <p className={styles.options}>
          <FaCreativeCommonsNc className={styles.icon}></FaCreativeCommonsNc>
          Real Economics Indicators
        </p>
        <p className={styles.options}>
          <GiChampions className={styles.icon}></GiChampions>One Score
        </p>
        <p className={styles.options}>
          <MdOutlineNotificationsActive
            className={styles.icon}
          ></MdOutlineNotificationsActive>
          Alert Central
        </p>
        <p className={styles.options}>
          <MdCall className={styles.icon}></MdCall>Customer Support
        </p>
      </div>
    </div>
  );
}

export default AsideBar;
