import React from "react";
import { Fragment } from "react";

const FragmentBanner = () => {
  return (
    <Fragment>
      <section
        id="FragmentBanner"
        className="w-full bg-black text-white h-32 border-b-4 border-gray-600 "
      >
        <div className="flex items-center h-full w-full p-5 justify-center md:justify-start md:p-10">
          <h1 className="text-2xl font-bold ">NOTES</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default FragmentBanner;
