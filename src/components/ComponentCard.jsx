import React, { Component } from "react";
import { Fragment } from "react";

const ComponentCard = (props) => {
    const {title, desc, date, id, onDelete} = props
  return (
    <Fragment>
      <section
        id="COMPONENT-CARD"
        className="border-2 border-solid p-3 rounded-lg my-5 w-full md:w-[45%] md:mx-auto relative pb-20"
      >
        <div>
          <h1 className="text-xl font-bold line-clamp-1">
            {title}
          </h1>
        </div>
        <div>
          <h1 className="text-gray-500">{date}</h1>
        </div>
        <div>
          <h1>
           {desc}
          </h1>
        </div>
        <section id="BUTTON" className="flex absolute left-0 -bottom-3 w-full">
          <div className=" border-2 border-gray-400 border-solid w-[50%] p-2 my-3 hover:opacity-50 active:bg-gray-600 transition-all duration-500">
            <button className="w-full" onClick={() => {
                onDelete(id)
            }}>
              <h1 className="w-full text-center text-red-500">Delete</h1>
            </button>
          </div>
          <div className=" border-2 border-gray-400 border-solid w-[50%] p-2 my-3 hover:opacity-50 active:bg-gray-600 transition-all duration-500">
            <button className="w-full">
              <h1 className="w-full text-center text-orange-300">Arsipkan</h1>
            </button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default ComponentCard;
