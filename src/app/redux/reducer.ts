import { combineReducers, createStore } from 'redux';


export const initialUsers = [];
const selectedUser = {};

export const users = (state = initialUsers, action) => {
    switch (action.type) {
        case 'ADD_USER':{
          return Object.assign([],[...state.slice(),action.payload])
        }
        case 'FETCH_USERS':{
          console.log(state.length,action.payload.length)
          return Object.assign([],[...state,...(action.payload)])
        }       
        default:
          return state;
      }
}

export const selectedUserReducer = (state = selectedUser, action) => {

    switch (action.type) {
        case 'USER_SELECTED':{
            return Object.assign({},state,action.payload)
          }
          case 'USER_DESELECTED':{
            return [selectedUser, action.payload];
          }
        default:
          return state;
      }
}


export const reducer = combineReducers({ users, selectedUserReducer })
export const store = createStore(reducer)