import { ADD_GOODS, UPDATE_GOODS, DELETE_GOODS } from "./actionType";
const goodsList = JSON.parse(window.localStorage.getItem('SHOPCART') || '[]') 
export default (state = goodsList, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_GOODS:
        // 判断是否购物车内存在该商品，有则num+1，否则新增Push
        // 深拷贝
        const addGoods = JSON.parse(JSON.stringify(state))
        const oldList = addGoods.find(item=>
            item.id === action.goods.id
        )
        if(oldList) {
            oldList.num += action.goods.num
        }else {
          addGoods.push(action.goods)
        }
        return addGoods
    case UPDATE_GOODS:
        // 购物车更新数量，将数量保存到store中
        const updateGoods = JSON.parse(JSON.stringify(state))
        const oldGoodsNum = updateGoods.find(item=>item.id === action.goods.id)
        oldGoodsNum.num = action.goods.num
      return updateGoods;
    case DELETE_GOODS:
      const deleteGoods = JSON.parse(JSON.stringify(state))
      const goodsIndex = deleteGoods.findIndex(item=>item.id === action.id)
      deleteGoods.splice(goodsIndex,1)
      return deleteGoods;
    default:
      return state;
  }
};
