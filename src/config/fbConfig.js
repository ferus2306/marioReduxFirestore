// firebase is nosql db, that contains collections of doc.
// collection example: project. 

import firebase from 'firebase/app'
//firestore is database
import 'firebase/firestore'
//Authentication
import 'firebase/auth'
  

  
  // Your web app's Firebase configuration that you can get from Google firebase settings. 
  var firebaseConfig = {
    apiKey: "AIzaSyDSqRor9jedApV170zMVWJPChXbwTSjvfo",
    authDomain: "net-ninja0marioplan.firebaseapp.com",
    databaseURL: "https://net-ninja0marioplan.firebaseio.com",
    projectId: "net-ninja0marioplan",
    storageBucket: "net-ninja0marioplan.appspot.com",
    messagingSenderId: "1026041704267",
    appId: "1:1026041704267:web:2cbbb7324b4f82b12d82ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })



  export default firebase;