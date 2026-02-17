import React from "react";
import styles from "./Home.module.css";
import { FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";

function Home() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Логотип */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}></span>
          <span className={styles.logoText}>foodwagon</span>
        </div>

        {/* Локация */}
        <div className={styles.location}>
          <span>Deliver to:</span>
          <FaMapMarkerAlt className={styles.icon} />
          <span className={styles.bold}>
            Current Location Mohammadpur Bus Stand, Dhaka
          </span>
        </div>

        {/* Правая часть */}
        <div className={styles.right}>
          <div className={styles.search}>
            <FaSearch />
            <span>Search Food</span>
          </div>

          <button className={styles.loginBtn}>
            <FaUser />
            Login
          </button>
        </div>

      </div>
    </header>
  );
}

export default Home;
