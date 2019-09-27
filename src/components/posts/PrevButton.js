import React from "react";
import { connect } from "react-redux";
import goToPrevPage from "../../store/middlewares/goToPrevPage";

const PrevButton = props => {
  const { hide } = props;
  return (
    <div
      className={hide ? "hide" : "button-wrapper"}
      onClick={this.props.goToPrevPage}
    >
      <button>Next</button>
    </div>
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
