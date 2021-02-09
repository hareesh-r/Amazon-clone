export const initialState = {
    basket:[
        {
            id: "87648234",
            title : "Hareesh" ,
             price: 69.69,
             rating:5,
             image: "https://images-na.ssl-images-amazon.com/images/I/713px5YqOtL._SL1500_.jpg"
        },
    ],
    user: null,
};

const reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
            break;
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index>=0)
            {
                newBasket.splice(index, 1);
            }

            return {...state};
            break;
        default:
            return state;
    }
}

export default reducer;