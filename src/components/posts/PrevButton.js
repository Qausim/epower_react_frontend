import React from "react";
import { connect } from "react-redux";
import goToPrevPage from "../../store/middlewares/goToPrevPage";
import "../../styles/paginator.css";

const PrevButton = props => {
  const { hide } = props;
  return (
    <button
      className={hide ? "hide" : "button text--white"}
      onClick={props.goToPrevPage}
    >
      Previous
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  goToPrevPage() {
    dispatch(goToPrevPage());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PrevButton);
