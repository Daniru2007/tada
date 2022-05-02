import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3W10oMzLUZeyzH3xohfxbcYxGSnUAML0",
    authDomain: "tadatodolist.firebaseapp.com",
    projectId: "tadatodolist",
    storageBucket: "tadatodolist.appspot.com",
    messagingSenderId: "1024016962546",
    appId: "1:1024016962546:web:eba7e6a003d5871262916b",
    measurementId: "G-LS0RFQKB82",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
