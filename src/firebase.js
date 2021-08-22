import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiOIa7EhZRsB_vaGFUd9DQ5rW--PumIEo",
    authDomain: "linkedin-clone-f6dd4.firebaseapp.com",
    projectId: "linkedin-clone-f6dd4",
    storageBucket: "linkedin-clone-f6dd4.appspot.com",
    messagingSenderId: "450344076996",
    appId: "1:450344076996:web:a165e76b3644abc1e7ab91"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};