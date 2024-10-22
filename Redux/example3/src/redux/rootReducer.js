import { combineReducers } from "redux";
import { productReducer } from "./Products/products.reducer";
import { messageReducer } from "./Messages/messages.reducer";

let rootReducer=combineReducers({product:productReducer,message:messageReducer})

export {rootReducer}