import React from 'react'
import { Heading } from '../atoms';

import styles from './Panel.css';

const Panel=({children, ...props})=>{
return(
        <div className={styles.panel}>
        <Heading 
            level={3}
            classname={styles.panelHeading}
        >
            {props.heading}
        </Heading>
        <div className={styles.panelBody}>{children}</div>
        </div>
    )
}

export default Panel;