// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsSquQKE1z8Ot3guqesWyV9lvPfOwwxOU",
  authDomain: "education-9a6b0.firebaseapp.com",
  projectId: "education-9a6b0",
  storageBucket: "education-9a6b0.appspot.com",
  messagingSenderId: "944177325329",
  appId: "1:944177325329:web:77822a90bc888e15fcd8b0",
  measurementId: "G-4T9VMQ2B6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
