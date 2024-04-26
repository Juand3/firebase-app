import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
//https://firebase.google.com/docs/web/setup#available-libraries


      
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQWBcGuY88vZkes424U23KpBshTEpqCho",
  authDomain: "fir-app-6cc13.firebaseapp.com",
  projectId: "fir-app-6cc13",
  storageBucket: "fir-app-6cc13.appspot.com",
  messagingSenderId: "889722917163",
  appId: "1:889722917163:web:1a533168bda3c7003cf56e"
  };
      
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
    
