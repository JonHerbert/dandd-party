import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB25tUMOKalON-17GW5pLa-PLR5Cz-cl6o',
  authDomain: 'dandd-party.firebaseapp.com',
  databaseURL: 'https://dandd-party-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dandd-party',
  storageBucket: 'dandd-party.appspot.com',
  messagingSenderId: '377775086398',
  appId: '1:377775086398:web:ad3f3176996f1e0b7c6a6f',
  measurementId: 'G-5VYKHTQMLX'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const analytics = getAnalytics(app)

export { app, auth, analytics }
