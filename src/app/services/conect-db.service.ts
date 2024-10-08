import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBiV5I3l4nt8kXtnm7n27DKATC8I6FsXxw",
  authDomain: "finder.firebaseapp.com",
  projectId: "397958647974",
  storageBucket: "gs://finder-3305d.appspot.com",
  messagingSenderId: "",
  appId: "1:397958647974:android:ad17b340a243c9c41e6467",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


@Injectable({
  providedIn: 'root'
})
export class ConectDBService {

  constructor() { }
}
