import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBomD2zLMj641iIkexyck9g8nlVD9cOua4",
  authDomain: "react-native.firebaseapp.com",
  databaseURL: "https://react-native.firebaseio.com",
  storageBucket: "react-native.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;