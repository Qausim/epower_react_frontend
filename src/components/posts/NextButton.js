import React from "react";
import goToNextPage from "../../store/middlewares/goToNextPage";
import { connect } from "react-redux";

const NextButton = props => {
  return (
    <button className="button text--white" onClick={props.goToNextPage}>
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
