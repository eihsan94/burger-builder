import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}><FaMinus /></button>
            <button className={classes.More}><FaPlus /></button>
        </div>
    )
}

BuildControl.propTypes = {

}

export default BuildControl

