import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, push, update, get, set , } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6oQeRyLnfwl-AWzeZYpxNqP7iFiroIwY",
  authDomain: "react-login-cac33.firebaseapp.com",
  projectId: "react-login-cac33",
  storageBucket: "react-login-cac33.appspot.com",
  messagingSenderId: "472835336417",
  appId: "1:472835336417:web:06437c49be35120f95efa0",
  measurementId: "G-MK3EPCVJHX"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFire);

export function writeUserData(name, email, password) {
    const db = getDatabase();
    const kay = push(ref(db, 'users')).key;
    set(ref(db, 'users/' + kay ), {
        name: name,
        email: email,
        password : password
    })
    .then(() => {
        alert("Cadastro Realizado com Sucesso!")
        return true;
    })
    .catch ((error) => {
        alert("Erro: " + error)
        return false
    })    
  }


export function getDbTable( talbe ){
    const dbRef = ref(getDatabase());
    const data = get(child(dbRef, talbe)).then((snapshot) => {
    if (snapshot.exists()) {
        alert("loading...");
        return snapshot.val();
    } else {
        alert("No data available table");
    }
    })
    .catch((error) => {
        console.error(error);
    });

    return data;
}

export function getLogin( email, password ){
    const dbRef = ref(getDatabase());
    const data = get(child(dbRef, "users/")).then((snapshot) => {
    if (snapshot.exists()) {
        alert("loading...");
        const array = Object.keys(snapshot.val());
        // array.map((user, k)=>{
        //     if(user.email === email && user.password === password){
        //         return true
        //     }else{
        //         alert("Login ou senha invalido!");
        //     }
        // })
        console.log(array[0])
    } else {
        alert("No data available table");
    }
    })
    .catch((error) => {
        console.error(error);
    });

    return data;
}


