import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD6Y48RB0K4Gg0Pvv23Be73QsEfUGRG5Hs",
	authDomain: "annur-official.firebaseapp.com",
	projectId: "annur-official",
	storageBucket: "annur-official.appspot.com",
	messagingSenderId: "956614770398",
	appId: "1:956614770398:web:d7a8a1e6168f562fa30c4f",
	measurementId: "G-SY6GRYKBJJ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
