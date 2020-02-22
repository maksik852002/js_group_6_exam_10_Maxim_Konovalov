import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { MdClose } from "react-icons/md";
import Button from "../UI/Button/Button";

const Comment = props => {
  moment.locale("ru");
  let date = props.date;
  date = moment(date).calendar();

  return (
    <div className="py-4">
      <div className="toast" style={{ opacity: "1", maxWidth: "100%" }}>
        <div className="toast-header">
          <strong className="mr-auto">
            {props.author} <small>{date.toLocaleString()}</small>{" "}
          </strong>
          <Button addClass="close" label={<MdClose />} click={props.click} />
        </div>
        <div className="toast-body">
          <span className="w-100">{props.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
