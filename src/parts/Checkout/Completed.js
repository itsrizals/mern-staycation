import React from "react";
import Fade from "react-reveal/Fade";

import CompletedImage from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedImage}
              alt="completed checkout"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accpted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
