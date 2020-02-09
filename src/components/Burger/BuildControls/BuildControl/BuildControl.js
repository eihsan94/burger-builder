import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled}><FaMinus /></button>
            <button className={classes.More} onClick={props.added}><FaPlus /></button>
        </div>
    )
}

BuildControl.propTypes = {

}

export default BuildControl

