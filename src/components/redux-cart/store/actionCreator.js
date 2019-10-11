import { ADD_GOODS, UPDATE_GOODS, DELETE_GOODS } from "./actionType";
export const addGoods = goods => {
    return {
        type:ADD_GOODS,
        goods
    }
}
export const updateGoods = goods => {
    return {
        type:UPDATE_GOODS,
        goods
    }
}
// 同步
export const deleteGoods = id => {
    return {
        type:DELETE_GOODS,
        id
    }
}

// 异步
export const asyncDeleteGoods = id => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(deleteGoods(id))
        },500)
    }
}