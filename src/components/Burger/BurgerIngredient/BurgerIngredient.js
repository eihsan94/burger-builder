/*
* @Purpose: BURGER INGREDIENT COMPONENT 
* @Explanation: THE INGREDIENT FEATURE FOR MAKING BURGER
*/

import React from 'react'
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types'

export default function BurgerIngredient (props) {
    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredient = <div className={classes.Meat}></div>;
            break;
        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case 'salad':
            ingredient = <div className={classes.Salad}></div>;
            break;
        case 'tomato':
            ingredient = <div className={classes.Tomato}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}
BurgerIngredient.propTypes = {
    type: PropTypes.string,
}