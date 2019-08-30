import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import IngredientGenerator from '../../Components/IngredientGenerator/IngredientGenerator';

import classes from './HomePage.module.css';
import RouteEndpoint from '../../Utilities/RouteEndpoints';

class HomePage extends Component {

    parseIngredientsArr = (ingredients) => {
        return Object.keys(ingredients).map((item) => {
            return (
                [...Array(ingredients[item])].map((i, key) => {
                    return <IngredientGenerator type={item} />
                })
            )
        }).reduce((acc, item) => {
            return acc.concat(item)
        }, []);
    }
    
    render() {
        let burgerIngredients = this.parseIngredientsArr(this.props.ingredients);
        
        let controls = Object.keys(this.props.ingredients).map((item) => {
            return(
                <div className={classes.IngredientControls}>
                    <p className={classes.Label}>{item}</p>
                    <button className={classes.RemoveButton} onClick={() => this.props.onRemoveIngredientClick(item)}>Less</button>
                    <button className={classes.AddButton} onClick={() => this.props.onAddIngredientClick(item)}>More</button>
                </div>
            )
        })

        return(
            <div className={classes.MainContainer}>
                <div className={classes.BurgerWrapper}>
                    <div className={classes.Burger}>
                        <IngredientGenerator type='bread-top' />
                            {burgerIngredients}
                        <IngredientGenerator type='bread-bottom' />
                    </div>
                </div>
                <div className={classes.BurgerBuilder}>
                    <h3>Total Price: ${this.props.totalAmount}</h3>
                    {controls}
                    {burgerIngredients.length > 0 ? 
                    <button><Link to={RouteEndpoint.CHECKOUT_PAGE}>Checkout</Link></button> : null}
                    {burgerIngredients.length > 0 ? 
                    <button onClick={this.props.clearBurger}>Discard</button>
                    :null}
                </div>
            </div>
        );
    }
}

export default HomePage;