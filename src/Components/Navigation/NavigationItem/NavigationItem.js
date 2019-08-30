import React from 'react';
import {Link} from 'react-router-dom';

import RouteEndpoints from '../../../Utilities/RouteEndpoints';

const NavItem = (props) => {
    return <Link to={props.endpoint}>{props.label}</Link>
} 

export default NavItem;