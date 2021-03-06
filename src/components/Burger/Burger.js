/*
* @Purpose: BURGER COMPONENT 
* @Explanation: THE BURGER ITSELF.
 */

import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let transformedIngredients = 
        Object
            .keys(props.ingredients)
            .map(igKey => [...Array(props.ingredients[igKey])]
                .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />))
                .reduce((arr, el) => arr.concat(el), []); // for flatten the array
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <div className={classes.BurgerContent}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        </div>
    );
}

export default Burger;
