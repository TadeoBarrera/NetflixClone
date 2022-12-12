import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBk6pfJNo4_J28rc5zz95yNgBixMBBiP90",
    authDomain: "netflix-eb7cf.firebaseapp.com",
    projectId: "netflix-eb7cf",
    storageBucket: "netflix-eb7cf.appspot.com",
    messagingSenderId: "236885555653",
    appId: "1:236885555653:web:8d312c11ca4515529073ac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export{auth}