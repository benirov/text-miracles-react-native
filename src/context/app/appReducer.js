import {
    GET_INFO_TEXT_PROCESS,
    GET_INFO_TEXT_SUCCESS,
    GET_INFO_TEXT_ERROR,
    GET_INFO_AUTHORS_PROCESS,
    GET_INFO_AUTHORS_SUCCESS,
    GET_INFO_AUTHORS_ERROR,
    GET_INFO_GENRES_PROCESS,
    GET_INFO_GENRES_SUCCESS,
    GET_INFO_GENRES_ERROR,
    SHOW_ALERT,
    CLEAN_ALERT
    
} from '../../types';


export default ( state, action) => {
    switch(action.type) {
        case GET_INFO_TEXT_PROCESS:
            return {
                ...state,
                process: true,
            }

        case UPDATE_PRODUCT_CART:
            return {
                ...state,
                cart: state.cart.map((product) => product._id == action.payload ? {...product, quantity: product.quantity+1 } : product),
            }

        case UPDATE_PRODUCT_CART_REMOVE:
            return {
                ...state,
                cart: state.cart.map((product) => product._id == action.payload && product.quantity >0 ? {...product, quantity: product.quantity-1 } : product),
            }

        case REMOVE_PRODUCT_CART:
            return {
                ...state,
                cart: state.cart.filter(element => element._id !== action.payload),
            }

        case UPDATE_PRICE_TOTAL:

            let totalPriceNew = 0;
            state.cart.forEach((e) => totalPriceNew = totalPriceNew+(e.quantity*e.price));
            return {
                ...state,
                totalPrice: totalPriceNew,
            };

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                cart: [],
                message: action.payload.message,
                totalPrice: 0,
            };

        case CREATE_ORDER_ERROR:
            
            return {
                ...state,
                message: action.payload.message,
            };

        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload,
            }
        case CLEAN_MESSAGE:
            return {
                ...state,
                message: null,
            }
        default:
            return state;
    }
}