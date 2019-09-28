import React from "react";

import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import pageNumberUtils from "../../utils/pageNumberUtils";

const Paginator = () => {
  const hidePrevButton = pageNumberUtils.getPageNumber() === 1;
  return (
    <div className="paginator-wrapper">
      <PrevButton hide={hidePrevButton} />
      <NextButton />
    </div>
  );
};

export default Paginator;
