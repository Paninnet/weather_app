import axios from "axios"
import { useEffect, useReducer } from "react"
import { dataContext } from "./dataContext"
import { CHANGE_INPUT, dataReducer, GET_RESULT, WRONG_QUERY } from "./dataReducer"

export const DataState = ({ children }) => {
   const key = '238c958330dcc0baa3c75ef8cf8f4460'

   const inithialState = {
      search: "",

      data: {},

      wrongQuery: false
   }

   const [state, dispatch] = useReducer(dataReducer, inithialState)

   const url = `http://api.openweathermap.org/data/2.5/weather?q=${state.search}&appid=${key}`

   const changeSearch = (text) => {
      dispatch({ type: CHANGE_INPUT, search: text})
   }

   const get_result = async () => {
      try {
         const res = await axios.get(url)
         console.log("GET", res.data);
         dispatch({ type: GET_RESULT,search: "", data:res.data, wrongQuery: false })
      } catch (error) {
         console.log(error);
         dispatch({type:WRONG_QUERY, wrongQuery: true })
      }
   }

   return (
      <dataContext.Provider value={{ state, changeSearch, get_result }}>
         {children}
      </dataContext.Provider>
   )
}
