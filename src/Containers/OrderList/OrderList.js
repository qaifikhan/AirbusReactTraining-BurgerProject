import React, { Component } from 'react';

import classes from './OrderList.module.css';
import { getOrders } from '../../WebServices/OrderAPIController';
import PageLoader from '../../Components/ProgressLoaders/PageLoader/PageLoader';
import { dumpLogs } from '../../Utilities/CommonMethods';

class OrderList extends Component {
    state = {
        orderList: [],
        showLoader: true,
    }

    componentDidMount() {
        getOrders()
        .then((response) => {
            dumpLogs(response);
            this.setState({orderList: [...response], showLoader: false})
        })
        .catch((err) => {
            alert('Call Failed')
            this.setState({showLoader: false})
        })
    }

    parseIngredientsArr = (ingredients) => {
        return Object.keys(ingredients).map((item, pos) => {
            return (
                ingredients[item] !== 0 ? <div key={pos}>{ingredients[item] + 'x ' + item}</div> : null
            )
        }).reduce((acc, item) => {
            return acc.concat(item)
        }, []);
    }

    render() {
        let orderList = this.state.orderList.map((item, pos) => {
            return (
                <div className={classes.OrderCard} key={pos}>
                    <h3>Order Id: {item.id}</h3>
                    {this.parseIngredientsArr(item.ingredients)}
                    <p>Total Amount: {'$'+item.totalAmount}</p>
                </div>
            )
        })

        return(
            <div className={classes.MainContainer}>
                <PageLoader loading={this.state.showLoader}>
                    <h1>My Order</h1>
                    <div>
                        {orderList}
                    </div>
                </PageLoader>
            </div>
        );
    }
}

export default OrderList;