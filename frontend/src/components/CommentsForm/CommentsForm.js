import React, { Component } from "react";
import moment from "moment";

class CommentsForm extends Component {
  state = {
    author: "",
    comment: ""
  };

  submitFormHandler = event => {
    event.preventDefault();
    const date = new Date();
    let data = {};
    Object.keys(this.state).forEach(key => (data[key] = this.state[key]));
    data.date = moment(date).format("YYYY-MM-DD HH:mm:ss");
    data.news_id = this.props.id;
    this.props.onSubmit(data);
    this.setState({ comment: "" });
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form className="w-75 m-auto" onSubmit={this.submitFormHandler}>
        <div className="form-group">
          <input
            name="author"
            type="text"
            className="form-control"
            placeholder="Enter Author"
            value={this.state.author}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div className="input-group">
          <textarea
            name="comment"
            type="textarea"
            style={{ resize: "none" }}
            className="form-control"
            rows="4"
            placeholder="Enter comment"
            value={this.state.comment}
            onChange={this.inputChangeHandler}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">
              ADD
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CommentsForm;
