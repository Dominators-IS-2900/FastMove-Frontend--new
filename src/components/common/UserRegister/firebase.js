import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCrky9nfCsgcVd7s5GG7mPxU0cDDgxCc6o",
    authDomain: "fastmove-7915b.firebaseapp.com",
    projectId: "fastmove-7915b",
    storageBucket: "fastmove-7915b.appspot.com",
    messagingSenderId: "559418905907",
    appId: "1:559418905907:web:aec11f302dbcc58c5ada46",
    measurementId: "G-Q3J53RKJQS"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref=firebase.database();
  export const storage=firebase.storage();
  export default firebase