import React, { useContext, useEffect } from 'react';
import { dataContext } from '../../context/dataContext';
import classes from './Result.module.css'

const Result = () => {

   const { state } = useContext(dataContext)
   if (state.data[0] && state.wrongQuery == false) {
      const temp = (+state.data[0].main.temp - 273.15)
      const res = temp.toFixed(1)

      return (
         <div className={classes.wrapper}>
            <p>Location: {state.data[0].name}</p>
            <p>Temp: {res}</p>
            <p>Visibility: {state.data[0].weather[0].description}</p>
         </div>
      );
   }
   else if (state.wrongQuery == true) {
      return (
         <div className={classes.wrapper}>
            <p>Wrong Query</p>
         </div>
      )
   }
   else {
      return (
         <div className={classes.wrapper}>
            <p>Data will be there</p>
         </div>
      )
   }
};
export default Result;