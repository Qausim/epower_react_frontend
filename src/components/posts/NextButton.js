import React from "react";
import goToNextPage from "../../store/middlewares/goToNextPage";
import { connect } from "react-redux";

const NextButton = ({ hide, goToNextPage }) => {
  return (
    <button
      className={hide ? "hide" : "button text--white"}
      onClick={goToNextPage}
    >
      Next
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  goToNextPage() {
    dispatch(goToNextPage());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NextButton);
