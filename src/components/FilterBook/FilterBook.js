import React from "react";
import styles from "../FilterBook/FilterBook.module.css"

const FilterBook = ({value, onChange}) =>(
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} type="text" 
      value={value} onChange={onChange} />
  </label>
);

export default FilterBook;