import { createSelector } from 'reselect';


const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : {}
)


export const selectCollection = collectionURLParam => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionURLParam] : null
)

export const selectCollectionsIsFetching = createSelector(
    [shopSelector],
    shop => shop.isFetching
)

export const selectCollectionIsLoaded = createSelector(
    [shopSelector],
    shop => !!shop.collections
)