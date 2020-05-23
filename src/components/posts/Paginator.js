import React from "react";
import { connect } from "react-redux";

import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import pageNumberUtils from "../../utils/pageNumberUtils";

const Paginator = ({ lastPageReached }) => {
  let hidePrevButton = pageNumberUtils.getPageNumber() === 1;
  if (lastPageReached) hidePrevButton = !lastPageReached;
  return (
    <div className="paginator-wrapper">
      <PrevButton hide={hidePrevButton} />
      <NextButton hide={lastPageReached} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    lastPageReached: state.lastPageReached,
    ...ownProps
  };
};

export default connect(mapStateToProps)(Paginator);
