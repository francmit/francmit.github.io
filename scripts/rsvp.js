 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration

 const firebaseConfig = {
     apiKey: "AIzaSyAJ6-aeMLms4Y6tnCvPPwG2cgTtBULAKvE",
     authDomain: "mj-wedding-rsvp.firebaseapp.com",
     databaseURL: "https://mj-wedding-rsvp-default-rtdb.firebaseio.com",
     projectId: "mj-wedding-rsvp",
     storageBucket: "mj-wedding-rsvp.appspot.com",
     messagingSenderId: "143415773960",
     appId: "1:143415773960:web:0e2f2f0f16e8a60d5bbabd"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const dbRef = ref(getDatabase(app));
 get(child(dbRef, `guests/0`)).then((snapshot) => {
 if (snapshot.exists()) {
     console.log(snapshot.val());
 } else {
     console.log("No data available");
 }
 }).catch((error) => {
 console.error(error);
 });