import firebase from 'firebase';
import firebaseConfig from './firebase.json';
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
