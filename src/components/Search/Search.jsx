import React, { useContext } from 'react';
import { dataContext } from '../../context/dataContext';
import classes from './Search.module.css'

const Search = () => {
   const {state, changeSearch, get_result} = useContext (dataContext)
   return (
      <div className={classes.wrapper}>
         <input onChange={e => changeSearch(e.target.value)} value={state.search} type="text" />
         <button onClick={get_result}>Search</button>
      </div>
   );
};

export default Search;