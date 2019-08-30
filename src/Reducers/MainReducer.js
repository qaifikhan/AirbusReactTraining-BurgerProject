import ReducerActions from "../Utilities/ReducerActions";

const initialState = () => {
    return {
        currentOrderIngredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0,
        },
        totalAmount: 0,
    }
}

const MainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ReducerActions.ADD_INGREDIENT:
            let updatedList = {...state.ingredients}
            let updatedValue = updatedList[action.key] + 1
            updatedList[action.key] = updatedValue
    
            let updatedTotalPrice = state.totalAmount + state.ingredientPrice[key];
            return {...state, currentOrderIngredients: updatedList, totalAmount: updatedTotalPrice}
        default:
            return {...state}
    }
}

export default MainReducer;