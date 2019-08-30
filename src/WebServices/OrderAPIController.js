import Axios from 'axios';
import { parseOrderList } from './OrderDataParser';

const HttpHandler = Axios;

export const createOrder = (postObj) => {
    let response = HttpHandler.post('https://airbusdemoapi.firebaseio.com/qaifi/orders.json', postObj)
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.log(err);
    })

    return response;
}

export const getOrders = () => {
    const response = HttpHandler.get('https://airbusdemoapi.firebaseio.com/qaifi/orders.json')
    .then((res) => {
        let parsedList = parseOrderList(res.data);
        return parsedList;
    })
    .catch(err => {
        console.log(err);
    })

    return response;
}