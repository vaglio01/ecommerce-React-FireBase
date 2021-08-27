import firebase from 'firebase' 

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD6GfYOAy_8U3DrV8g16ZKtAUWqQ3z7mPI",
  authDomain: "primproyectreact.firebaseapp.com",
  databaseURL: "https://primproyectreact.firebaseio.com",
  projectId: "primproyectreact",
  storageBucket: "primproyectreact.appspot.com",
  messagingSenderId: "967339088704",
  appId: "1:967339088704:web:3e7bd5dc9c724bf649f8a5",
  measurementId: "G-9HB3KQGXW2"
};
firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db; 
export default firebase;