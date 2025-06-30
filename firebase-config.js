import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB072--mvlw6JnXnZ-FiUumxiPuZzsStgM",
  authDomain: "jonogoner-awaaj-84dc1.firebaseapp.com",
  projectId: "jonogoner-awaaj-84dc1",
  storageBucket: "jonogoner-awaaj-84dc1.firebasestorage.app",
  messagingSenderId: "790301394478",
  appId: "1:790301394478:web:8a2d22a9d1e553c890c1bf",
  databaseURL: "https://jonogoner-awaaj-84dc1-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);