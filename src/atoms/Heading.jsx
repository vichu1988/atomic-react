/**  
  Atom - HTML Headings
**/

import React from 'react';

import styles from './Heading.css'

const Heading = ({ children, level, classname }) => {
  return (
   <div>
     {level === 1 ? <h1 className={classname}>{children}</h1> : null}
     {level === 2 ? <h2 className={classname}>{children}</h2> : null}
     {level === 3 ? <h3 className={classname}>{children}</h3> : null}
     {level === 4 ? <h4 className={classname}>{children}</h4> : null}
     {level === 5 ? <h5 className={classname}>{children}</h5> : null}
     {level === 6 ? <h6 className={classname}>{children}</h6> : null}
   </div>
  )
}

export default Heading;