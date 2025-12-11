import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js"

export const IMGBB_API = "404cfce237dcb7ed159a7f73b03a712e"
window.IMGBB_API = IMGBB_API

const firebaseConfig = {
  apiKey: "AIzaSyAINZKU7vGdWQyktjwcRjc3LX2ihf2hpYU",
  authDomain: "ronymediaagency.firebaseapp.com",
  projectId: "ronymediaagency",
  storageBucket: "ronymediaagency.firebasestorage.app",
  messagingSenderId: "275213521430",
  appId: "1:275213521430:web:8d0d7a6ad6f020c0749b37"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
