import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

let firebaseConfig = {
  apiKey: "AIzaSyDjXRARvd-rAPyDJUybs3lrLDVK6wl4VZ0",
  authDomain: "iprolam-f087d.firebaseapp.com",
  projectId: "iprolam-f087d",
  storageBucket: "iprolam-f087d.appspot.com",
  messagingSenderId: "570606084111",
  appId: "1:570606084111:web:85fab24179bd49348fc37a",
  measurementId: "G-R0F12D0MWJ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
