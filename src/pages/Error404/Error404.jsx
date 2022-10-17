import React from "react";
import "./Error404.css";

function Error404() {
  return (
    <>
      <div id="notfound">
        <div class="notfound">
          <div>
            <div class="notfound-404">
              <h1>!</h1>
            </div>
            <h2>Error 404</h2>
          </div>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.{" "}
            <button>Back to Home Page</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Error404;
