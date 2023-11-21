import React, { useState } from "react";
import { Fragment } from "react";
import ComponentInput from "../components/ComponentInput";
import { getData } from "../utils/data";
import FragmentList from "../Fragments/FragmentList";
import FragmentBanner from "../Fragments/FragmentBanner";
import FragmentFooter from "../Fragments/FragmentFooter";

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

  return (
    <Fragment>
      <section className="bg-black px-10">
        <FragmentBanner />
        <section
          id="FRAGMENT-INPUT"
          className="text-white py-20 md:w-[80%] lg:w-[60%]  mx-auto"
        >
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl">Buat Catatan</h1>
          </div>
          <div className="flex justify-end">
            <h1>Sisa karakter : </h1>
          </div>

          {/* Mengirimkan fungsi addNoteHandler sebagai prop ke ComponentInput */}
          <ComponentInput addNote={onAddNoteHandler} />
        </section>

        <FragmentList notes={notes} />
        <FragmentFooter />
      </section>
    </Fragment>
  );
};

export default PageNotesFull;
