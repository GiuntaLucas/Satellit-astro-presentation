import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAg2DPjsYav1HABzsyTIJhrknOx5vtVKQI",
    authDomain: "astro-satellit.firebaseapp.com",
    projectId: "astro-satellit",
    storageBucket: "astro-satellit.appspot.com",
    messagingSenderId: "370897019238",
    appId: "1:370897019238:web:754830793122176ad428a7",
    measurementId: "G-Q04D6HY1CX"
  };

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);