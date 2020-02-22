import {
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILURE,
  NEWS_CREATE_FAILURE,
  NEWS_DELETE_FAILURE,
  SINGLENEWS_FETCH_REQUEST,
  SINGLENEWS_FETCH_SUCCESS,
  SINGLENEWS_FETCH_FAILURE
} from "./actionsTypes";
import axios from "../../axiosBase";

export const newsFetchRequest = () => ({ type: NEWS_FETCH_REQUEST });
export const newsFetchSuccess = data => ({ type: NEWS_FETCH_SUCCESS, data });
export const newsFetchFailure = error => ({ type: NEWS_FETCH_FAILURE, error });

export const singleNewsFetchRequest = () => ({
  type: SINGLENEWS_FETCH_REQUEST
});
export const singleNewsFetchSuccess = data => ({
  type: SINGLENEWS_FETCH_SUCCESS,
  data
});
export const singleNewsFetchFailure = error => ({
  type: SINGLENEWS_FETCH_FAILURE,
  error
});

export const newsCreateFailure = error => ({
  type: NEWS_CREATE_FAILURE,
  error
});

export const newsDeleteFailure = error => ({
  type: NEWS_DELETE_FAILURE,
  error
});

export const fetchNews = () => {
  return async dispatch => {
    try {
      dispatch(newsFetchRequest());
      const response = await axios.get("/news");
      dispatch(newsFetchSuccess(response.data));
    } catch (e) {
      dispatch(newsFetchFailure(e));
    }
  };
};

export const fetchSingleNews = id => {
  return async dispatch => {
    try {
      dispatch(singleNewsFetchRequest());
      const response = await axios.get(`/news/${id}`);
      dispatch(singleNewsFetchSuccess(response.data));
    } catch (e) {
      dispatch(singleNewsFetchFailure(e));
    }
  };
};

export const createNews = data => {
  return async dispatch => {
    try {
      dispatch(newsFetchRequest());
      await axios.post("/news", data);
    } catch (e) {
      dispatch(newsFetchFailure(e));
    }
  };
};

export const deleteNews = id => {
  return async dispatch => {
    try {
      await axios.delete(`/news/${id}`);
      dispatch(fetchNews());
    } catch (e) {
      dispatch(newsDeleteFailure(e));
    }
  };
};
