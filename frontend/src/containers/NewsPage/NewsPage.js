import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews, deleteNews } from "../../store/actions/newsActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import News from "../../components/News/News";

class NewsPage extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  fullNewsOpenHandler = id => {
    this.props.history.push(`/news/${id}`);
  };

  render() {
    const { news, loading } = this.props;
    return (
      <div className="d-flex flex-wrap mt-4">
        {loading ? (
          <Spinner />
        ) : (
          news &&
          news
            .reverse()
            .map((el, i) => (
              <News
                key={el.id}
                lastNews={i}
                title={el.title}
                image={el.image}
                date={el.date}
                click={() => this.props.deleteNews(el.id)}
                fullNews={() => this.fullNewsOpenHandler(el.id)}
              />
            ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news,
    loading: state.news.loading,
    show: state.news.show,
    error: state.news.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews()),
    deleteNews: id => dispatch(deleteNews(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
