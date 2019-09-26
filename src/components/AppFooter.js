import React from "react";

import "../styles/app-footer.css";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer text--white">
      <p>Copyright {currentYear}</p>
    </footer>
  );
};

export default AppFooter;
