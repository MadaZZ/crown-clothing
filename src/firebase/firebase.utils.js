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
export default firebase;