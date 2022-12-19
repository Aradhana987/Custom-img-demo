// import { getApi } from '../../api';
import axios from "axios";
import {
  COUNTRY_DATA_REQUEST,
  COUNTRY_DATA_SUCCESS,
  COUNTRY_DATA_FAILURE,
} from "../../types/Types";

export const countryDataRequest = () => ({
  type: COUNTRY_DATA_REQUEST,
});
export const countryDataSuccess = (payload) => ({
  type: COUNTRY_DATA_SUCCESS,
  payload,
});
export const countryDataFailure = (error) => ({
  type: COUNTRY_DATA_FAILURE,
  error,
});

export const fetchCountryData = () => async (dispatch) => {
  //   const API_URL = "http://192.168.1.26:24/api/owners/get-theme";
  const API_URL = "http://localhost/taste-on-way-api/public/api/v2/get-country";
  const apiHeaders = async () => {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  };
  dispatch(countryDataRequest());
  // return getApi(`get-country`)
  return axios
    .get(API_URL, await apiHeaders())
    .then((res) => {
      dispatch(countryDataSuccess(res.data));
      return res ?? res?.data ?? res?.data?.responseData ?? null;
    })
    .catch((e) => {
      dispatch(countryDataFailure(e));
    });
};
