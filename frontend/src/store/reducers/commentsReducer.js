import {
  COMMENT_FETCH_REQUEST,
  COMMENT_FETCH_SUCCESS,
  COMMENT_FETCH_FAILURE,
  COMMENT_DELETE_FAILURE,
  SHOW_COMMENTS_FORM
} from "../actions/actionsTypes";

const initialState = {
  comments: [],
  loading: false,
  error: null,
  show: false,
  showForm: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMMENTS_FORM:
      return { ...state, showForm: !state.showForm };
    case COMMENT_FETCH_REQUEST:
      return { ...state, loading: true, showForm: false };
    case COMMENT_FETCH_SUCCESS:
      return {
        ...state,
        comments: action.data,
        loading: false,
        showForm: false
      };
    case COMMENT_FETCH_FAILURE:
      return {
        ...state,
        error: action.error.toString(),
        show: true,
        loading: false
      };
    case COMMENT_DELETE_FAILURE:
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
