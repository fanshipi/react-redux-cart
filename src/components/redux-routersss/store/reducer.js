import {Add,Minus} from './actionType'

export default (num = 0, action) => {
  switch (action.type) {
    case Add:
      return num + action.count;
    case Minus:
      return num - action.count;
    default:
      return num;
  }
};
