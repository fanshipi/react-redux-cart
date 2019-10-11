import {createStore,applyMiddleware, compose} from 'redux'
// 导入reducers
import reducer from './reducer'
import thunk from 'redux-thunk';
// 创建仓库
// const store = createStore(reducers,applyMiddleware(thunk))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
// 导出store
export default store