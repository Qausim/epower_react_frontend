import React from "react";
import { connect } from "react-redux";

import "../styles/app-header.css";

const AppHeader = props => (
  <header className="app-header text--white">
    <h1>{props.title}</h1>
  </header>
);

const mapStateToProps = (state, ownProps) => ({ title: state.headerTitle });

export default connect(mapStateToProps)(AppHeader);
