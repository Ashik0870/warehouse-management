
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyApXe5MRqzZPFM925NRo1iekwen160bf3g",
  authDomain: "warehousemanagement-5de6b.firebaseapp.com",
  databaseURL: "https://warehousemanagement-5de6b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "warehousemanagement-5de6b",
  storageBucket: "warehousemanagement-5de6b.appspot.com",
  messagingSenderId: "294682648494",
  appId: "1:294682648494:web:74ef4dab7720a704dbf23f",
  measurementId: "G-2YLFX3VQGW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};




