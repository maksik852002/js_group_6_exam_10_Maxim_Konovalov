import React from "react";
import { apiURL } from "../../constants";
import moment from "moment";
import "moment/locale/ru";
import Button from "../UI/Button/Button";
import { MdDeleteForever } from "react-icons/md";

import "./News.css";

const News = props => {
  const path = apiURL + "/uploads/" + props.image;
  let date = props.date;
  moment.locale("ru");
  date = moment(date).calendar();
  return (
    <div
      className="col-12 col-lg-6 col-xl-5 m-auto"
      style={{ maxHeight: "572px" }}
    >
      <div className="card">
        <img
          src={props.image && path}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <h6
            className="card-title"
            onClick={props.fullNews}
            style={{ cursor: "pointer" }}
          >
            {props.title}
          </h6>
          <div className="d-flex flex-wrap justify-content-between">
            <p className="card-text m-0">
              <small className="text-muted">{date.toLocaleString()}</small>
            </p>
            <Button
              addClass="close"
              label={<MdDeleteForever />}
              click={props.click}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default News;
