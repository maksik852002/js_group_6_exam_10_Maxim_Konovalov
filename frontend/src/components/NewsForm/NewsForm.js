import React, { Component } from "react";
import moment from "moment";

class ProductForm extends Component {
  state = {
    title: "",
    news_body: "",
    image: ""
  };

  submitFormHandler = event => {
    event.preventDefault();
    const date = new Date();
    const formData = new FormData();
    formData.append("date", moment(date).format("YYYY-MM-DD HH:mm:ss"));
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });
    this.props.onSubmit(formData);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  render() {
    return (
      <form onSubmit={this.submitFormHandler}>
        <div className="custom-file mb-3">
          <input
            name="image"
            type="file"
            className="custom-file-input"
            id="image"
            onChange={this.fileChangeHandler}
          />
          <label className="custom-file-label" htmlFor="image">
            {this.state.image ? this.state.image.name : "Choose file"}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter news title"
            value={this.state.title}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="news_body">Article</label>
          <textarea
            name="news_body"
            type="textarea"
            style={{ resize: "none" }}
            className="form-control"
            rows="15"
            id="news_body"
            placeholder="Enter news text"
            value={this.state.news_body}
            onChange={this.inputChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    );
  }
}

export default ProductForm;
