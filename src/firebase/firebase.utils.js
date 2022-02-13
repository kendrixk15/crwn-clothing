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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
  
    console.log(userAuth.uid)
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    console.log(snapShot)
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;