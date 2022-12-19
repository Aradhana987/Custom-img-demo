import { combineReducers } from "redux";
import countryDataReducer from "./reducers/countryData/CountryDataReducer";

const rootReducer = combineReducers({
  countryData: countryDataReducer,
});

export default rootReducer;
