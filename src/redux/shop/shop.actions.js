import ShopTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
    type: ShopTypes.UPDATE_COLLECTION,
    payload: collectionsMap
})