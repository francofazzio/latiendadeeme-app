// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWJI_hAdqA3I4vOtfS0qcXqC5Vroi8wW0",
  authDomain: "ecommerce-la-tienda-de-eme.firebaseapp.com",
  projectId: "ecommerce-la-tienda-de-eme",
  storageBucket: "ecommerce-la-tienda-de-eme.appspot.com",
  messagingSenderId: "1095876477085",
  appId: "1:1095876477085:web:bd7e149556cd956e51d474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db