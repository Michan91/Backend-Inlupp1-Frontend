import actiontypes from "../actiontypes";

import axios from "axios";

export const getIssueCatalog = () => {
  return async (dispatch) => {
    dispatch({
      type: actiontypes().issueCatalog.getIssueCatalog,
    });
    try {
      const res = await axios.get("https://localhost:7067/api/Issues");
      console.log(res.data);
      if (res.status === 200) {
        dispatch(getIssueCatalogSuccess(res.data));
      } else {
        throw new Error("could not get the data");
      }
    } catch (err) {
      dispatch(getIssueCatalogFailure(err.message));
    }
  };
};

const getIssueCatalogSuccess = (issues) => {
  return {
    type: actiontypes().issueCatalog.getIssueCatalogSuccess,
    payload: issues,
  };
};

const getIssueCatalogFailure = (err) => {
  return {
    type: actiontypes().issueCatalog.getIssueCatalogFailure,
    payload: err,
  };
};
