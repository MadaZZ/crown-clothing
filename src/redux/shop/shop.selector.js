import { createSelector } from 'reselect';


const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)


export const selectCollection = collectionURLParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionURLParam]
)