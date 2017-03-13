import React, { PropTypes } from 'react';

import styles from './Panel.css';


const Panel = ({ children, ...props }) => {
  return (
    <div className={styles.panel}>
      <h3 className={styles.panelHeading}>{props.heading}</h3>
      <div className={styles.panelBody}> {children} </div>
    </div>
  );
};

Panel.propTypes = {
  /**
   * Children
  */
  children: PropTypes.string,
  /**
   * Heading
  */
  heading: PropTypes.string
};

export default Panel;