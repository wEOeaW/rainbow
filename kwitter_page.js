// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbpnvD7H1uiup5sQGMZ99w_Iv--rXE_gQ",
  authDomain: "kwitter-84c23.firebaseapp.com",
  databaseURL: "https://kwitter-84c23-default-rtdb.firebaseio.com",
  projectId: "kwitter-84c23",
  storageBucket: "kwitter-84c23.appspot.com",
  messagingSenderId: "387222590181",
  appId: "1:387222590181:web:2790fe895517624ca9fa0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
(
    msg = document.getElemenntById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
)