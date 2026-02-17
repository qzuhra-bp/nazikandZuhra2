import React from 'react'
import styles from "./Catalog.module.css"
import { popularItems } from '../Data'
function Catalog() {
  return (
      <div className="section">

      {/* Popular Items */}
      <h2 className={styles.title}>Popular items</h2>

      <div className={styles.popularGrid}>
      {popularItems.map(items=>(
       <div>
        <img src={items.image} alt="" />
        <h2>{items.title}</h2>
        <h2>{items.restaurant}</h2>
        <p>{items.price}</p>
       </div>
      ))}
      </div>

    </div>
  )
}

export default Catalog