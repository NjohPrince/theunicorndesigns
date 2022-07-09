import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

// stylesheet
import styles from "./designcard.module.css";

const DesignComponent = ({ title, slug, description, author, coverPhoto }) => {
  return (
    <>
      {/** a design is considered to be an article */}
      <Link href={`/designs/${slug}`}>
        <article className={styles.card}>
          <div className={styles.image}>
            <img src={coverPhoto.url} alt={title} />
          </div>

          <div className={styles.body}>
            <div className={styles.design__data}>
              <h3 className={styles.title}>{title}</h3>
              {/* <div className={styles.description}>
                dangerouslySetInnerHTML={{ __html: description.html }}
              </div> */}
            </div>

            <div className={styles.design__author}>
              <div className={styles.profile}>
                <img src={author.avatar.url} alt={author.name} />
              </div>
              <h4>{author.name}</h4>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

// default props config
DesignComponent.defaultProps = {
  title: "",
  slug: "",
  description: {},
  author: {},
  coverPhoto: {},
};

// defining the type of data to be received
DesignComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,

  // use this when the structure of the data is known ahead of time
  author: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  coverPhoto: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default DesignComponent;
