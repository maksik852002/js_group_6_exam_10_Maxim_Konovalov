import {
  NEWS_FETCH_REQUEST,
  NEWS_FETCH_SUCCESS,
  NEWS_FETCH_FAILURE,
  NEWS_DELETE_FAILURE,
  SINGLENEWS_FETCH_REQUEST,
  SINGLENEWS_FETCH_SUCCESS,
  SINGLENEWS_FETCH_FAILURE
} from "../actions/actionsTypes";

const initialState = {
  news: [],
  singleNews: [],
  loading: false,
  error: null,
  show: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCH_REQUEST:
      return { ...state, loading: true };
    case NEWS_FETCH_SUCCESS:
      return { ...state, news: action.data, loading: false };
    case NEWS_FETCH_FAILURE:
      return {
        ...state,
        error: action.error.toString(),
        show: true,
        loading: false
      };
    case NEWS_DELETE_FAILURE:
      return {
        ...state,
        error: action.error.toString(),
        show: true,
        loading: false
      };
    case SINGLENEWS_FETCH_REQUEST:
      return { ...state, loading: true };
    case SINGLENEWS_FETCH_SUCCESS:
      return { ...state, singleNews: action.data, loading: false };
    case SINGLENEWS_FETCH_FAILURE:
      return {
        ...state,
        error: action.error.toString(),
        show: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
