import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { login, logout, selectUser } from "./features/UserSlice";
import { auth } from "./firebase";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Paypal from "./Pages/Paypal";
import Profile from "./Pages/Profile";

function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout)
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className={classes.root}>
      <Router>{
          !user ? (<Login />) : (
            <Routes>
              <Route path='/login' element={ <Login/> }/>
              <Route path='/profile' element={ <Profile/> }/>
              <Route path='/checkout' element={ <Paypal/> }/>
              <Route path='/' element={ <Home/> }/>    
          </Routes>
          )
          }</Router>
    </div>
  );
}
const useStyles = makeStyles((theme) =>({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;