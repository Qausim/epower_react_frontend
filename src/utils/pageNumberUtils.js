const pageTrackerVariable = "currentPage";

export default {
  setPageNumber(pageNumber) {
    sessionStorage.setItem(pageTrackerVariable, pageNumber);
  },
  getPageNumber() {
    return parseInt(sessionStorage.getItem(pageTrackerVariable), 10);
  }
};
