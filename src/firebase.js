import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC78fFRu3dLGVj-ThxnIyHB5w9DRsHmzh4",
    authDomain: "discova-55e28.firebaseapp.com",
    databaseURL: "https://discova-55e28.firebaseio.com",
    projectId: "discova-55e28",
    storageBucket: "discova-55e28.appspot.com",
    messagingSenderId: "1052995663113",
    appId: "1:1052995663113:web:c7e58cfd4063c0dba54fd8",
    measurementId: "G-4LBRHF3MLZ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };