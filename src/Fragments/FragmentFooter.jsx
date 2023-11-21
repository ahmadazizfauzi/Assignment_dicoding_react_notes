import React from "react";
import { Fragment } from "react";

const FragmentFooter = () => {
  return (
    <Fragment>
      <section id="FOOTER" className=" bg-black w-full  flex justify-center items-center text-white border-solid border-t-2 border-t-gray-600 py-20 h-full">
        <div className="">
            <h1 className="text-center md:text-lg">©️Copyright</h1>
            <h1 className="text-center md:text-lg">Made by <span className="text-gray-600">Ahmad</span></h1>
            <h1 className="text-center md:text-lg">with <span className="text-blue-300">React JS</span></h1>
            <h1 className="text-center md:text-lg">in Kota 🥛</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default FragmentFooter;
