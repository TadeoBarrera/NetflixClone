import { makeStyles, Typography } from '@material-ui/core';
import logo from '../images/Logonetflix.png';
import HeroBanner from '../images/Netflix-Background-prueba-1.jpg';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { useState } from 'react';
import SignUp  from "./SignUp"

const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={classes.root}>
      <img src={logo} alt='Logo' className={classes.logo}/>
      <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>
        {!signIn ? (
      <SignUp/>
    ) : (
    <>
      <Typography variant='h4' gutterBottom>
      Unlimited films, TV programmes and more.
      </Typography>
      <Typography variant='h5'>
        Watch anywhere. Cancel at any time.
      </Typography>
      <Typography variant='h6' gutterBottom>
        Ready to watch ? Enter your email to create or restart your membership.
      </Typography>
      <div className={classes.imputBlock}>
        <NetflixInput placeholder='Email address'/>
        <NetflixButton>GET STARTED</NetflixButton>
      </div>  
    </>
    )}
    
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    position: 'relative',
    height: '100vh',
    backgroundImage: `url(${HeroBanner})`,
    objectFit:'contain',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  },
  logo: {
    position: 'fixed',
    top: '15px',
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  session:{
    position:'fixed',
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info:{
    color:'#fff',
    zIndex: 15,
    textAlign: "center",
    "& h4":{
      fontWeight: 800,
    },
    "& h5":{
      fontWeight: 400,
    },
  },
}));

export default Login