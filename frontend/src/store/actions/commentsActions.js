import {
  COMMENT_FETCH_REQUEST,
  COMMENT_FETCH_SUCCESS,
  COMMENT_FETCH_FAILURE,
  COMMENT_CREATE_FAILURE,
  COMMENT_DELETE_FAILURE,
  SHOW_COMMENTS_FORM,
  CLOSE_MODAL
} from "./actionsTypes";
import axios from "../../axiosBase";

export const commentsFetchRequest = () => ({ type: COMMENT_FETCH_REQUEST });
export const commentsFetchSuccess = data => ({
  type: COMMENT_FETCH_SUCCESS,
  data
});
export const commentsFetchFailure = error => ({
  type: COMMENT_FETCH_FAILURE,
  error
});

export const commentCreateFailure = error => ({
  type: COMMENT_CREATE_FAILURE,
  error
});

export const commentDeleteFailure = error => ({
  type: COMMENT_DELETE_FAILURE,
  error
});

export const showCommentsForm = () => ({ type: SHOW_COMMENTS_FORM });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const fetchComments = query => {
  return async dispatch => {
    try {
      dispatch(commentsFetchRequest);
      const response = await axios.get("/comments/" + query);
      dispatch(commentsFetchSuccess(response.data));
    } catch (e) {
      dispatch(commentsFetchFailure(e));
    }
  };
};

export const createComment = (data, query) => {
  return async dispatch => {
    try {
      await axios.post("/comments/", data);
      dispatch(fetchComments(query));
    } catch (e) {
      dispatch(commentCreateFailure(e));
    }
  };
};

export const deleteComment = (id, query) => {
  return async dispatch => {
    try {
      await axios.delete(`/comments/${id}`);
      dispatch(fetchComments(query));
    } catch (e) {
      dispatch(commentDeleteFailure(e));
    }
  };
};
