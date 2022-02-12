import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyC4eDoGhydAx-YPAe5cQhSL4x-r74MNpd4",
    authDomain: "crwn-db2-5c092.firebaseapp.com",
    projectId: "crwn-db2-5c092",
    storageBucket: "crwn-db2-5c092.appspot.com",
    messagingSenderId: "89125927624",
    appId: "1:89125927624:web:48462fc412aee096fa83fd",
    measurementId: "G-Q6Y0X08EML"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;