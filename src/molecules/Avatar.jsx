import React, { PropTypes } from 'react';

import styles from './Avatar.css';


const Avatar = ({ ...props }) => {
  return (
    <img
      className={styles.avatar}
      src={props.picUrl}
      alt={props.altTag}
      width={props.size}
      height={props.size}
    />


  );
};

Avatar.propTypes = {
  /**
   * Picture URL
  */
  picUrl: PropTypes.string,
  /**
   * Alt Tag
  */
  altTag: PropTypes.string,
  /**
   * Image Size
  */
  size: PropTypes.number
};

export default Avatar;