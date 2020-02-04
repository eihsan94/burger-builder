import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls  = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Tomato', type: 'tomato'},
];

function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <div className={classes.Price}>
                {props.totalPrice}
            </div>
            <div className={classes.ButtonsContainer}>
                {controls.map(c => 
                    <BuildControl 
                        key={c.label}
                        label={c.label}
                        added={() => props.ingredientAdded(c.type)}
                        removed={() => props.ingredientRemoved(c.type)}
                    />)
                }
            </div>
        </div>
    )
}

BuildControls.propTypes = {

}

export default BuildControls

