import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBninSHh-HcwDEqbBXkZ7m3nVDK32hygRY",
    authDomain: "web-admin-panel-fa412.firebaseapp.com",
    projectId: "web-admin-panel-fa412",
    storageBucket: "web-admin-panel-fa412.appspot.com",
    messagingSenderId: "768307745317",
    appId: "1:768307745317:web:75915e05a94b9685b2a5cc",
    measurementId: "G-YJ9EXM5B87"
};

if(!firebase.apps.length) {
    firebase.initializeApp(config)
  }

  const db=firebase.firestore();


  export default db;