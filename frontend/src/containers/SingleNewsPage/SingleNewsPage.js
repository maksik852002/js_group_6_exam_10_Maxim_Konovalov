import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ru";
import { fetchSingleNews } from "../../store/actions/newsActions";
import { apiURL } from "../../constants";
import Comments from "../Comments/Comments";
import Spinner from "../../components/UI/Spinner/Spinner";

class SingleNewsPage extends Component {
  componentDidMount() {
    this.props.fetchSingleNews(this.props.match.params.id);
  }

  render() {
    const { singleNews, loading } = this.props;
    const path = apiURL + "/uploads/" + singleNews.image;
    moment.locale("ru");
    let date = singleNews.date;
    date = moment(date).calendar();
    return (
      <div className="d-flex flex-wrap mt-3">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="w-100">
              <p className="card-text m-0 pb-2">
                <small className="text-muted">{date.toLocaleString()}</small>
              </p>
              <h2 className="text-center">{singleNews.title}</h2>
              <hr />
              <div>
                <div className="clearfix">
                  <div
                    style={{
                      maxWidth: "420px",
                      float: "left",
                      marginRight: "20px",
                      padding: "10px"
                    }}
                  >
                    <img
                      src={singleNews.image ? path : ""}
                      className="card-img-top"
                      alt={singleNews.title}
                    />
                  </div>
                  <p className="text-justify px-3">{singleNews.news_body}</p>
                </div>
              </div>
            </div>
            <div className="mt-3 w-100">
              <h2>Comments</h2>
              <Comments id={singleNews.id} />
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleNews: state.news.singleNews,
    loading: state.news.loading,
    show: state.news.show,
    error: state.news.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleNews: id => dispatch(fetchSingleNews(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleNewsPage);
