// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSrCEwf4S0746IKqS5y3_3bHY7sqMhVNE',
  authDomain: 'netfilx-clone-af781.firebaseapp.com',
  projectId: 'netfilx-clone-af781',
  storageBucket: 'netfilx-clone-af781.appspot.com',
  messagingSenderId: '1031954851278',
  appId: '1:1031954851278:web:8f79a89e57d1549f3e779f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
