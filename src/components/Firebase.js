//FireBase
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCE2XESBFdmRAtmSTR7BU23xOqf8eskqQE",
    authDomain: "crud-react-firebase-a6793.firebaseapp.com",
    projectId: "crud-react-firebase-a6793",
    storageBucket: "crud-react-firebase-a6793.appspot.com",
    messagingSenderId: "976114596299",
    appId: "1:976114596299:web:cc042be193f7a068505e4e"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  //Ejecutando Firestore con la constante db para utilizar crear coleciones eleminar y modificar
   export const db = fb.firestore();