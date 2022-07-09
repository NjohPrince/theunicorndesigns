import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// stylesheet
import styles from "./carousel.module.css";

// dummy_data
import { Categories } from "../../dummy_data/Categories";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // carousel.current.scrollWidth: available carousel width
    // carousel.current.offsetWidth: what is visible

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      <motion.div ref={carousel} className={styles.carousel__wrapper}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.inner__carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          {Categories &&
            Categories.length > 0 &&
            Categories.map((category, index) => {
              return (
                <motion.div
                  key={category.name + "..." + index}
                  className={styles.carousel__item}
                >
                  <button>{category.name}</button>
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
