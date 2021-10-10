import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthentication;

/* steps for authentication
inittial setup-----------

1.firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5.enable auth method

*/