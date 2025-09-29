// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBzbCi-7m3DuSrS9GQ9C43Bp0RVr1DmRKk',
    authDomain: 'money-tracker-app-12553.firebaseapp.com',
    projectId: 'money-tracker-app-12553',
    storageBucket: 'money-tracker-app-12553.firebasestorage.app',
    messagingSenderId: '558886637631',
    appId: '1:558886637631:web:7c5f5111bfdbbd4e17e88a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
