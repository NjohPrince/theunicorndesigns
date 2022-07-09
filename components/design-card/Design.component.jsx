import React from "react";
import PropTypes from "prop-types";

// stylesheet
import styles from "./designcard.module.css";

const DesignComponent = ({ title, description, author, coverPhoto }) => {
  return (
    <>
      {/** a design is considered to be an article */}
      <article className={styles.card}>
        <div className={styles.photo}>{title}</div>
        <div className={styles.body}>
          <div className={styles.design__data}></div>
          <div className={styles.design__author}></div>
        </div>
      </article>
    </>
  );
};

// default props config
DesignComponent.defaultProps = {
  title: "",
  description: "",
  author: null,
  coverPhoto: null,
};

// defining the type of data to be received
DesignComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  // use this when the structure of the data is known ahead of time
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }),
  coverPhoto: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default DesignComponent;
