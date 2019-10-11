import {Add,Minus} from './actionType'
export default (count = 0, action) => {
    switch (action.type) {
      case Add:
        return count + action.count
      case Minus:
        return count - action.count
      default:
        return count
    }
  }