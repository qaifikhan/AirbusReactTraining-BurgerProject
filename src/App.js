import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Topbar from './Components/Navigation/Topbar/Topbar';

import './App.css';
import RouteEndpoints from './Utilities/RouteEndpoints';
import HomePage from './Containers/HomePage/HomePage';
import OrderList from './Containers/OrderList/OrderList';
import CheckoutPage from './Containers/CheckoutPage/CheckoutPage';

class App extends Component {
  state = {
    ingredients: {
        meat: 0,
        cheese: 0,
        bacon: 0,
        salad: 0,
    },
    ingredientPrice: {
        meat: 4,
        cheese: 1,
        bacon: 1,
        salad: 2,
    },
    totalAmount: 0
  }

  onAddIngredientClick = (key) => {
    let updatedList = {...this.state.ingredients}
    let updatedValue = updatedList[key] + 1
    updatedList[key] = updatedValue

    let updatedTotalPrice = this.state.totalAmount + this.state.ingredientPrice[key];
    this.setState({ingredients: updatedList, totalAmount: updatedTotalPrice})
  }

  onRemoveIngredientClick = (key) => {
      let updatedList = {...this.state.ingredients}
      let updatedValue = updatedList[key] - 1
      if(updatedValue >= 0) {
          updatedList[key] = updatedValue;

          let updatedTotalPrice = this.state.totalAmount - this.state.ingredientPrice[key];
          this.setState({ingredients: updatedList, totalAmount: updatedTotalPrice})
      }
  }

  clearBurger = () => {
    this.setState({
      ingredients: {
        meat: 0,
        cheese: 0,
        bacon: 0,
        salad: 0,
      },
      totalAmount: 0
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar />
          <Switch>
            <Route path={RouteEndpoints.ORDERS_PAGE} component={OrderList} />

            <Route path={RouteEndpoints.CHECKOUT_PAGE} render={(props) => (this.state.totalAmount !== 0 ? <CheckoutPage {...props} ingredients={this.state.ingredients} totalAmount={this.state.totalAmount} clearBurger={this.clearBurger} /> : <Redirect to={RouteEndpoints.HOME_PAGE} /> )} />

            <Route exact path={RouteEndpoints.HOME_PAGE} render={() => <HomePage ingredients={this.state.ingredients} onRemoveIngredientClick={this.onRemoveIngredientClick} onAddIngredientClick={this.onAddIngredientClick} clearBurger={this.clearBurger} totalAmount={this.state.totalAmount} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
