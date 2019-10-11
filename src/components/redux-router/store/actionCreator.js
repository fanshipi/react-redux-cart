import {Add,Minus} from './actionType'

export const add = count =>{
    return {
        type:Add,
        count
    }
}

export const minus = count => {
    return {
        type:Minus,
        count
    }
}