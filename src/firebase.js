import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3FRc6X0yD0_G8FTn_bDCODywkmZCm-QA",
  authDomain: "social-media-app-a9f50.firebaseapp.com",
  projectId: "social-media-app-a9f50",
  storageBucket: "social-media-app-a9f50.appspot.com",
  messagingSenderId: "92345257030",
  appId: "1:92345257030:web:b1fc9d4110dd77479e8e47",
  measurementId: "G-HB7P8VH7P4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
