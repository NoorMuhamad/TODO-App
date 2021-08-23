import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"

import rootReducer from "./rootReducer";

const middleware=[];

if(process.env.Node_ENV==="development"){
    middleware.push(logger);
}
const store = createStore(rootReducer ,applyMiddleware(...middleware))

export default store;