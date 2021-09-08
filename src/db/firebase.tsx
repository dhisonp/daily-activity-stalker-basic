import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7DR1BwKl8eLLMMK0-D7VF42Kor16bWsw",
  authDomain: "habit-schedu.firebaseapp.com",
  databaseURL: "https://habit-schedu-default-rtdb.firebaseio.com",
  projectId: "habit-schedu",
  storageBucket: "habit-schedu.appspot.com",
  messagingSenderId: "989682684816",
  appId: "1:989682684816:web:c2a61403d40ab887e41915",
  measurementId: "G-0JYXMBL028",
};

const currActRef = "app/currentAct";

const fbInit = () => {
  try {
    !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Database initialized.");
  }
};

export const getCurrentAct = () => {
  var act;
  try {
    firebase
      .database()
      .ref(currActRef)
      .on("value", (snapshot) => {
        act = snapshot.child("name").val();
      });
  } catch (err) {
    console.log(err);
    act = "error fetching act";
  } finally {
    return act;
  }
};

export const setCurrentAct = (actName: string) => {
  //add timestamp, etc. params
  try {
    firebase.database().ref(currActRef).set({
      name: actName,
    });
  } catch (error) {
    console.log(error);
  }
};

export default fbInit;