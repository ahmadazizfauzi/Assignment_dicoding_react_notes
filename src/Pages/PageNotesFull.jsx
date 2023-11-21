import React, { useState } from "react";
import { Fragment } from "react";
import ComponentInput from "../components/ComponentInput";
import { getData } from "../utils/data";
import FragmentList from "../Fragments/FragmentList";
import FragmentBanner from "../Fragments/FragmentBanner";
import FragmentFooter from "../Fragments/FragmentFooter";
import FragmentInput from "../Fragments/FragmentInput";

const PageNotesFull = () => {
  // Menggunakan hooks useState untuk menyimpan data catatan
  const [notes, setNotes] = useState(getData());

  // Membuat fungsi handler untuk menambah catatan baru
  const onAddNoteHandler = ({ title, body }) => {
    // Menggunakan setNotes dengan fungsi updater yang menerima prevNotes
    setNotes((prevNotes) => [
      // Menyebar (spread) catatan sebelumnya
      ...prevNotes,
      // Menambahkan catatan baru dengan properti yang diberikan
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const onDeleteHandler = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  };

  return (
    <Fragment>
      <section className="bg-black px-10">
        <FragmentBanner />
        <FragmentInput addNote={onAddNoteHandler} />
        <FragmentList notes={notes} onDelete={onDeleteHandler} />
        <FragmentFooter />
      </section>
    </Fragment>
  );
};

export default PageNotesFull;
