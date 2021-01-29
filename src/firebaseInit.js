import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = { 
    apiKey: "AIzaSyAKF28udBa1MjWyKhNiyQpPZAPshnj-PbY", 
    authDomain: "at-home-f6c23.firebaseapp.com", 
    databaseURL: "https://at-home-f6c23.firebaseio.com", 
    projectId: "at-home-f6c23", 
    storageBucket: "at-home-f6c23.appspot.com", 
    messagingSenderId: "529294445657", 
    appId: "1:529294445657:web:d6ce52e5b32eb0946d7548", 
    measurementId: "G-7DZ976G3EL" 
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  const db=firebase.firestore();
  db.settings({timestampInSnapshots: true})
  export default db;