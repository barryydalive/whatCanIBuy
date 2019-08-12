import firebase from 'firebase'
require("firebase/functions");

const firebaseConfig = {
  apiKey: "AIzaSyCMQ2lU3l48ZauRz71Ym6OMpGJqDWVNeHI",
  authDomain: "whatcanibuy-f2f80.firebaseapp.com",
  databaseURL: "https://whatcanibuy-f2f80.firebaseio.com",
  projectId: "whatcanibuy-f2f80",
  storageBucket: "",
  messagingSenderId: "686922562738",
  appId: "1:686922562738:web:bbd9f631e73c40b7"
};

firebase.initializeApp(firebaseConfig)

export const functions = firebase.functions()

