import ShopTypes from './shop.types';
import { fireStore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type: ShopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionFailure = (errMessage) => ({
    type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = fireStore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(snapshot => {
            let collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(e => dispatch(fetchCollectionFailure(e.message)));
    }
}