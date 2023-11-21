import React from "react";
import ComponentInput from "../components/ComponentInput";
import { Fragment } from "react";

const FragmentInput = ({addNote}) => {
  return (
    <Fragment>
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
        <ComponentInput addNote={addNote} />
      </section>
    </Fragment>
  );
};

export default FragmentInput;
