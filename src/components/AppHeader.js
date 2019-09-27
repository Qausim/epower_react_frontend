import React from "react";
import { connect } from "react-redux";

import "../styles/app-header.css";

const AppHeader = props => (
  <header className="app-header text--white">
    <h1 className="text--aligned-center">{props.content.title}</h1>
    <p className="text--aligned-center">
      {props.content.published.toUpperCase()}
    </p>
  </header>
);

const mapStateToProps = (state, ownProps) => ({ content: state.headerContent });

export default connect(mapStateToProps)(AppHeader);
