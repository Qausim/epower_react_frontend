import React from "react";
import { connect } from "react-redux";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Paginator = ({ currentPage }) => {
  const hidePrevButton = currentPage === 1;
  return (
    <div className="paginator-wrapper">
      <PrevButton hide={hidePrevButton} />
      <NextButton />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  currentPage: state.currentPage,
  ...ownProps
});

export default connect(mapStateToProps)(Paginator);
