import React from 'react';

import "./error-information.css";

const ErrorInformation = () => {
  return (
    <div className="error-information">
      <span className="oops">oops!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we have already sent droid to fix it)</span>
    </div>
  );
};

export default ErrorInformation;