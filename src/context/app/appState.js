import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';

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

import axiosClient from '../../config/axios';

const AppState = ({children}) => {

    //definir state
    const initialState = {
        texts: [],
        page: 1,
        authors: [],
        genres: [],
        filter: null,
        message: null
    }

    //definir reducer
    const  [ state, dispatch ] = useReducer(appReducer, initialState);


    const getTexts  = async () => {

            if(!state.cart.find((productcart) => productcart._id === product._id)){
                dispatch({
                    type: ADD_PRODUCT_CART,
                    payload: product
                });
            }else{

                let arrayIndex = state.cart.find((productcart) => productcart._id === product._id);
                updateProductCart(arrayIndex._id);
            }
            updateTotalprice();

    }

    const getAuthors  = async (id, type = true) => {

        if(type){
            dispatch({
                type: UPDATE_PRODUCT_CART,
                payload: id
            });
        }else{
            dispatch({
                type: UPDATE_PRODUCT_CART_REMOVE,
                payload: id
            });
        }
        updateTotalprice();

    }

    const getGenres  = async () => {

            dispatch({
                type: UPDATE_PRICE_TOTAL,
            });
    }

   

   
    return (
        <appContext.Provider
            value={{
                texts: state.cart,
                page: state.totalPrice,
                authors: state.message,
                genres: state.genres,
                filter: state.filter,
                message: state.message,
                getTexts,
                getAuthors,
                getGenres
            }}
         >
             {children}
        </appContext.Provider>
    )

}

export default AppState;