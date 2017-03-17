import React from 'react';

import { Avatar } from '../molecules';
import styles from './Header.css';

const Header = (props) => (
  <div className={styles.header}>

    <Avatar
      className={styles.avatar}
      {...props}
      picUrl="https://avatars1.githubusercontent.com/u/357862"
      altTag="Vinci Rufus"
    />
    <h1 className={styles.logo}>Atomic React</h1>

  </div>
);

Header.defaultProps = {
  size: 48
};

export default Header;