import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyB1kEZgxTOtcvxhhJ7lq4-3MjuuqhY0ARs",
    authDomain: "crown-clothing-db-8e8e5.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-8e8e5.firebaseio.com",
    projectId: "crown-clothing-db-8e8e5",
    storageBucket: "crown-clothing-db-8e8e5.appspot.com",
    messagingSenderId: "1091932027935",
    appId: "1:1091932027935:web:02f120858f339838b4a92a",
    measurementId: "G-21CLF6F1FD"
};

firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => (fireAuth.signInWithPopup(googleProvider));

/* Github Login 
* const githubProvider = new firebase.auth.GithubAuthProvider();
* githubProvider.addScope('repo');;
* export const signInWithGithub = () => (fireAuth.signInWithPopup(githubProvider));
*/

/* Facebook Login
* var fbProvider = new firebase.auth.FacebookAuthProvider();
* fbProvider.addScope('repo');;
* export const signInWithGithub = () => (fireAuth.signInWithPopup(fbProvider));
*/

export const createUserProfile = async (userAuth, otherData) => {
    if (!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = fireStore.collection(collectionKey);

    const batch = fireStore.batch();
    objectsToAdd.forEach(obj => {
        let newRefDoc = collectionRef.doc();
        batch.set(newRefDoc, obj);
    });

    return batch.commit()
}

export default firebase;