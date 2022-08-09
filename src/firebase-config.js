import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
	appId:process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

