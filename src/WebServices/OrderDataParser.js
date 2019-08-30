const parseIngredients = (obj) => {
    return {
        meat: obj.meat,
        bacon: obj.bacon,
        cheese: obj.cheese,
        salad: obj.salad,
    }
}

const parseOrderItem = (obj, id) => {
    return {
        id: id,
        ingredients: parseIngredients(obj.ingredients),
        totalAmount: obj.totalAmount
    }
}

export const parseOrderList = (list) => {
    if(list !== undefined && list !== null) {
        return Object.keys(list).map((objKey) => {
            return (
                [...Array(list[objKey])].map((orderItem, key) => {
                    return (parseOrderItem(list[objKey], objKey));
                })
            )
        }).reduce((acc, item) => {
            return acc.concat(item)
        }, []);
    } else {
        return []
    }
}