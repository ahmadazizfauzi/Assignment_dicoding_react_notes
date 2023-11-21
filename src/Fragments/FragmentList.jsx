import React, { useState } from "react";
import { Fragment } from "react";
import ComponentCard from "../components/ComponentCard";
import { getData } from "../utils/data";

const FragmentList = ({notes, onDelete}) => {
  return (
    <Fragment>
      <section
        id="FRAGMENT-LIST"
        className="pt-5 pb-36  text-white md:w-[80%] md:mx-auto  "
      >
        <div className="">
          <h1 className="font-bold text-2xl text-center w-full mb-6">
            Catatan Aktif
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {notes.map((note) => (
            <ComponentCard key={note.id} date={note.id} id={note.id} title={note.title} desc={note.body} onDelete={onDelete}/>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default FragmentList;
