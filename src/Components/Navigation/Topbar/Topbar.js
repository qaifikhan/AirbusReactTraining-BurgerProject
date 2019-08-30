import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Topbar.module.css';
import RouteEndpoints from '../../../Utilities/RouteEndpoints';
import NavItem from '../NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const Topbar = (props) => {
    return(
        <div className={classes.Topbar}>
            <Logo />
            <div className={classes.RightMenu}>
                <NavItem label={'Home'} endpoint={RouteEndpoints.HOME_PAGE} />
                <NavItem label={'Orders'} endpoint={RouteEndpoints.ORDERS_PAGE} />

                {
                    props.userLoggedIn ? 
                    <NavItem label={'Login'} endpoint={RouteEndpoints.HOME_PAGE} />
                    : null
                }
            </div>
        </div>
    );
}

export default Topbar;