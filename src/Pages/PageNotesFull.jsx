import React, { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { getData } from "../utils/data";
import FragmentList from "../Fragments/FragmentList";
import FragmentBanner from "../Fragments/FragmentBanner";
import FragmentFooter from "../Fragments/FragmentFooter";
import FragmentInput from "../Fragments/FragmentInput";

const PageNotesFull = () => {
  useEffect(() => {
    console.log(getData());
  }, []);

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
    // Ini menyatakan bahwa hanya catatan dengan ID yang tidak sama dengan ID yang diberikan (id) yang akan disertakan dalam array baru (updateNotes).
    // note.id !== id, jika ada yang sama gak usah sertakan, jka berbeda sertakan.
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  };

  const onArsipHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <Fragment>
      <section className="bg-black px-10">
        <FragmentBanner />
        <FragmentInput addNote={onAddNoteHandler} />
        <FragmentList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onArsipHandler}
        />
        <FragmentFooter />
      </section>
    </Fragment>
  );
};

export default PageNotesFull;
