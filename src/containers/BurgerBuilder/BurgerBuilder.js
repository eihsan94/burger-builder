/*
* @Purpose: BURGER PAGE COMPONENT 
* @Explanation: THE MAIN BURGER PAGE.
 */

import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    salad: 50,
    tomato: 40,
    cheese: 130,
    meat: 170
};

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            tomato: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 40,
    }
    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount  = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: Math.floor(newPrice),
            ingredients: updatedIngredients,
        });
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount  = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({
                totalPrice: Math.floor(newPrice),
                ingredients: updatedIngredients,
            });
        }
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    totalPrice={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                />
            </Aux>
        )
    }
}
