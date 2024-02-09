import { combineReducers } from "redux";

import cardsReducer from "./cards/reducer";

const rootReducer = combineReducers({ cardsReducer });

export default rootReducer;
