// import SHOP_DATA from '../../dataFiles/shop.data';
import ShopTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errMessage: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errMessage: action.payload
            }

        case ShopTypes.UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer