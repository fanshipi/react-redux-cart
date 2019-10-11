import {Add,Minus} from './actionType'

export const add = count => {
    return {
        type:Add,
        count
    }
}
export const incrementAsync = (count)=> {
    return (dispatch) => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(add(count));
      }, 1000);
    };
  }
export const minus = count =>{
    return {
        type:Minus,
        count
    }
}