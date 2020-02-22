import React, { Component } from "react";
import NewsForm from "../../components/NewsForm/NewsForm";
import { createNews } from "../../store/actions/newsActions";
import { connect } from "react-redux";

class AddNews extends Component {
  createNews = async data => {
    await this.props.createNews(data);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="border rounded mt-4 p-4">
        <h2 className="mb-4">Add NEWS</h2>
        <NewsForm onSubmit={this.createNews} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNews: data => dispatch(createNews(data))
});

export default connect(null, mapDispatchToProps)(AddNews);
