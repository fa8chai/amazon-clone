import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHKQsPOuE2-9BTkTCeLur8NSbsYh8Br-A",
    authDomain: "clone-7090b.firebaseapp.com",
    databaseURL: "https://clone-7090b.firebaseio.com",
    projectId: "clone-7090b",
    storageBucket: "clone-7090b.appspot.com",
    messagingSenderId: "742974242712",
    appId: "1:742974242712:web:8ac539e468916b8d9335ed",
    measurementId: "G-9DXZ19NLVY"
});


const auth = firebase.auth();

export { auth };
