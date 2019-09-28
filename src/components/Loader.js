import React from "react";
import { connect } from "react-redux";

import "../styles/loader.css";

const Loader = ({ showLoader }) => (
  <div className={`loader-wrapper${showLoader ? "" : " hide"}`}>
    <div className="loader"></div>
  </div>
);

const mapStateToProps = ({ showLoader }, ownProps) => ({ showLoader });

export default connect(mapStateToProps)(Loader);
