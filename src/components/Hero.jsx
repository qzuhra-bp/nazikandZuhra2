import React from "react";
import styles from "./Hero.module.css";
import { FaMotorcycle, FaShoppingBag, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import foodImg from "../assets/img.png"; // вставь сюда свою картинку еды

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Левая часть */}
        <div className={styles.left}>
          <h1>Are you starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>

          <div className={styles.card}>

            {/* Tabs */}
            <div className={styles.tabs}>
              <button className={`${styles.tab} ${styles.active}`}>
                <FaMotorcycle /> Delivery
              </button>
              <button className={styles.tab}>
                <FaShoppingBag /> Pickup
              </button>
            </div>

            {/* Input */}
            <div className={styles.searchBox}>
              <div className={styles.input}>
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                />
              </div>

              <button className={styles.findBtn}>
                <FaSearch />
                Find Food
              </button>
            </div>

          </div>
        </div>

        {/* Правая часть (картинка) */}
        <div className={styles.right}>
          <img src={foodImg} alt="food" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
