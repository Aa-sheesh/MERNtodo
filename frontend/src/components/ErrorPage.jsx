import React from "react";
import {useRouteError} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
  return (
    <>
      <div className="flex h-screen justify-center items-center" id="errorPage">
        <div>
          <h1 className="font-extrabold text-red-500 text-3xl">Error!</h1>
          <p className="text-white mb-5">
            Oops, we cannot connect to your page.
            <br /> Try again later.
          </p>
          <p className="text-orange-400">{error.statusText||error.message}</p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
