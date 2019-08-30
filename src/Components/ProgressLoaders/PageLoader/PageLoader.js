import React from 'react';

import classes from './PageLoader.module.css';

let PageLoader = (props) => {
    return(
        props.loading ? 
        <div className={classes.LdsRing}><div></div><div></div><div></div><div></div></div>
        :
        props.children
    )
}

export default PageLoader;