import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDumG2kMw45nx_4gDCt-8kwvBW40MUgQo0',
  authDomain: 'blog-test-8625d.firebaseapp.com',
  databaseURL: 'https://blog-test-8625d-default-rtdb.firebaseio.com',
  projectId: 'blog-test-8625d',
  storageBucket: 'blog-test-8625d.firebasestorage.app',
  messagingSenderId: '142006632889',
  appId: '1:142006632889:web:c056e87dbe35f 8bae0f668',
  measurementId: 'G-8HCXCJ4X4H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
