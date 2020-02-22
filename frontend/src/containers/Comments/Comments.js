import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchComments,
  createComment,
  deleteComment,
  showCommentsForm,
  closeModal
} from "../../store/actions/commentsActions";
import { fetchNews } from "../../store/actions/newsActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import Comment from "../../components/Comment/Comment";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Button from "../../components/UI/Button/Button";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle
} from "react-icons/io";

class NewsPage extends Component {
  componentDidMount() {
    const query = `?news_id=${this.props.id}`;
    this.props.fetchComments(query);
  }

  deleteCommentHandler = async id => {
    const query = `?news_id=${this.props.id}`;
    await this.props.deleteComment(id, query);
    await this.props.fetchNews();
    this.props.fetchComments(query);
  };

  createCommentHandler = async data => {
    const query = `?news_id=${this.props.id}`;
    await this.props.createComment(data, query);
  };

  render() {
    const { comments, loading, showForm } = this.props;

    console.log(showForm);
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="m-auto">
            <div
              className="p-2 d-flex justify-content-center"
              style={{ background: "rgba(255,255,255,.85)" }}
            >
              <Button
                addClass="close"
                label={
                  showForm ? (
                    <IoIosArrowDropupCircle />
                  ) : (
                    <IoIosArrowDropdownCircle />
                  )
                }
                click={this.props.showCommentsForm}
              />
              {showForm && (
                <CommentsForm
                  id={this.props.id}
                  onSubmit={this.createCommentHandler}
                />
              )}
            </div>
            {comments &&
              comments
                .reverse()
                .map(el => (
                  <Comment
                    key={el.id}
                    author={el.author}
                    comment={el.comment}
                    date={el.date}
                    click={() => this.deleteCommentHandler(el.id)}
                  />
                ))}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comm.comments,
    loading: state.comm.loading,
    showForm: state.comm.showForm,
    error: state.comm.error,
    show: state.comm.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: query => dispatch(fetchComments(query)),
    createComment: (data, query) => dispatch(createComment(data, query)),
    deleteComment: (id, query) => dispatch(deleteComment(id, query)),
    fetchNews: () => dispatch(fetchNews()),
    showCommentsForm: () => dispatch(showCommentsForm()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
