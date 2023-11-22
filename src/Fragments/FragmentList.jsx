import React, { useState } from "react";
import { Fragment } from "react";
import ComponentCard from "../components/ComponentCard";
import FragmentSearch from "./FragmentSearch";

const FragmentList = ({ notes, onDelete, onArchive }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const activeNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const archivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Fragment>
      <section>
        <FragmentSearch setSearchTerm={setSearchTerm} />
      </section>
      <section
        id="FRAGMENT-LIST"
        className="pt-5 pb-20  text-white md:w-[80%] md:mx-auto  "
      >
        <div className="">
          <h1 className="font-bold text-2xl text-center w-full mb-6">
            Catatan Aktif
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {activeNotes
            .map((note) => (
              <ComponentCard
                key={note.id}
                date={note.createdAt}
                id={note.id}
                title={note.title}
                desc={note.body}
                onDelete={() => onDelete(note.id)}
                what={"Arsipkan"}
                onArchive={() => onArchive(note.id)}
                searchTerm={searchTerm}
              />
            ))
            .reverse()}
        </div>
      </section>
      <section
        id="FRAGMENT-LIST-ARSIP"
        className="pt-5 pb-36  text-white md:w-[80%] md:mx-auto  "
      >
        <div className="">
          <h1 className="font-bold text-2xl text-center w-full mb-6">Arsip</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {archivedNotes
            .map((note) => (
              <ComponentCard
                key={note.id}
                date={note.id}
                id={note.id}
                title={note.title}
                desc={note.body}
                onDelete={() => onDelete(note.id)}
                onArchive={() => onArchive(note.id)}
                searchTerm={searchTerm}
                what={"Pindahkan"}
              />
            ))
            .reverse()}
        </div>
      </section>
    </Fragment>
  );
};

export default FragmentList;
