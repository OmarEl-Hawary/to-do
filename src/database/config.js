import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDuvDLemeVrIbUbi6JZ1TGGooSnZCkU80A',
  authDomain: 'to-do-643e8.firebaseapp.com',
  databaseURL: 'https://to-do-643e8.firebaseio.com',
  projectId: 'to-do-643e8',
  storageBucket: 'to-do-643e8.appspot.com',
  messagingSenderId: '734911281310',
  appId: '1:734911281310:web:1a00925bf7b85e01c0638f',
  measurementId: 'G-NLNZLN822P',
};

firebase.initializeApp(config);

const database = firebase.database();
export { database };
