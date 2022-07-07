// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBF6u35xlqyeu9rzDoYb2c675u5n1zNjf4",
    authDomain: "facebook-clone-55759.firebaseapp.com",
    projectId: "facebook-clone-55759",
    storageBucket: "facebook-clone-55759.appspot.com",
    messagingSenderId: "341590699192",
    appId: "1:341590699192:web:7c900d7365c1aa4946d84d",
    measurementId: "G-HRNXG9CRKC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth , provider};
  export default db;