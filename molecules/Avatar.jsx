import React, { PropTypes } from 'react';
// Import of Styles could be as simple as importing the file like given below.
import './Avatar.css';

const Avatar = (props) => {
  return (
    <img
      className="avatar"
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