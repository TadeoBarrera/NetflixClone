import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setPrice } from '../features/PriceSlice';
import { NetflixButton } from '../styled/styledcomponents';
import { useNavigate } from 'react-router-dom';


const Plans = ({cost, children, color, wide}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleClick = (cost) =>{
        dispatch(setPrice(cost))
        history("/checkout")
    }

  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant='h5'>
        {children}
      </Typography>
      <NetflixButton onClick={() => handleClick(cost)} color={color} wide={wide}>Subscribe</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display:"flex",
      justifyContent: "space-between",
      alignItems:"center",
      "& button":{
        marginBottom: theme.spacing(2),
      }
    },
    standard:{
      fontSize: "1.2rem",
    }
  }));

export default Plans