import React, {Component} from 'react';
import Axios from 'axios';

import IngredientGenerator from '../../Components/IngredientGenerator/IngredientGenerator';

import classes from './CheckoutPage.module.css';
import RouteEndpoint from '../../Utilities/RouteEndpoints';
import { createOrder } from '../../WebServices/OrderAPIController';

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onPlaceOrderClick = () => {
        let postObj = {
            ingredients: this.props.ingredients,
            totalAmount: this.props.totalAmount
        }

        createOrder(postObj)
        .then((response) => {
            alert('Thank you for the order')
            this.props.clearBurger();
            this.props.history.push(RouteEndpoint.HOME_PAGE);
        })
        .catch(err => {
            alert('Order Failed')
        });
    }

    onCancelBtnClick = () => {
        this.props.history.goBack();
    }

    parseIngredientsArr = (ingredients) => {
        return Object.keys(ingredients).map((item) => {
            return (
                ingredients[item] !== 0 ? <div>{ingredients[item] + 'x ' + item}</div> : null
            )
        }).reduce((acc, item) => {
            return acc.concat(item)
        }, []);
    }

    render() {
        let burgerIngredients = Object.keys(this.props.ingredients).map((item) => {
            return (
                [...Array(this.props.ingredients[item])].map((i, key) => {
                    return <IngredientGenerator type={item} />
                })
            )
        }).reduce((acc, item) => {
            return acc.concat(item)
        }, []);
        
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
                    <p>Are you sure??</p>
                    {this.parseIngredientsArr(this.props.ingredients)}
                    <h3>Total Price: ${this.props.totalAmount}</h3>
                    <button onClick={this.onPlaceOrderClick}>Yes, please continue!</button>
                    <button onClick={this.onCancelBtnClick}>No, cancel</button>
                </div>
            </div>
        );
    }
}

export default CheckoutPage;