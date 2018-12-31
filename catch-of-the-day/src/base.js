import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCbWbMRk37qCF2HGFF-LhHh3hXfgGfXCY4",
  authDomain: "catch-of-the-day-aag.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-aag.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
