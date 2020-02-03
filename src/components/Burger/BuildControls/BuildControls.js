import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls  = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
];

function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            {controls.map(c => <BuildControl key={c.label} label={c.label} />)}
        </div>
    )
}

BuildControls.propTypes = {

}

export default BuildControls

