import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcl-vnmUNphYrLauEoL3gfBoG1s9dZ_0w",
  authDomain: "developers-hut-ddda8.firebaseapp.com",
  projectId: "developers-hut-ddda8",
  storageBucket: "developers-hut-ddda8.appspot.com",
  messagingSenderId: "862251940183",
  appId: "1:862251940183:web:a83319bc3036bac903e612"
};

const app = initializeApp(firebaseConfig);

export default app;