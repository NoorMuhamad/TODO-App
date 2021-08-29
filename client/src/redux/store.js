import { createStore,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";
import todoSaga from '../sagas/todoSaga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer ,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSaga)

export default store;