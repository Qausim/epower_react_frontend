import React from "react";
import goToNextPage from "../../store/middlewares/goToNextPage";
import { connect } from "react-redux";

const NextButton = props => {
  return (
    <div className="button-wrapper" onClick={this.props.goToNextPage}>
      <button>Next</button>
    </div>
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
