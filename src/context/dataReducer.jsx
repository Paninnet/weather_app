export const CHANGE_INPUT = 'CHANGE_INPUT'
export const GET_RESULT = 'GET_RESULT'
export const WRONG_QUERY = 'WRONG_QUERY'

export const dataReducer = (state,action) => {

   switch (action.type) {
      case CHANGE_INPUT:
         return{...state, search:action.search}
      case GET_RESULT:
         return{...state, search:action.search, wrongQuery: action.wrongQuery, data:[action.data]}
      case WRONG_QUERY:
         return{...state, search:action.search, wrongQuery: action.wrongQuery }
   
      default:
         return {...state};
   }
}
