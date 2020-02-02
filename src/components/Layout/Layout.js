/*
* @Purpose: LAYOUT COMPONENT 
* @Explanation: THE LAYOUT TEMPLATE.
 */

import React from 'react'
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

export default function Layout(props) {
    return (
        <Aux>
            <div>
                Toolbar,
                SideDrawer
                Backdrop
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}
