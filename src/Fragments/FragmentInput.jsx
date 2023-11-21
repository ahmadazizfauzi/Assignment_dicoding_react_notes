import React, { useState } from "react";
import ComponentInput from "../components/ComponentInput";
import { Fragment } from "react";

const FragmentInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingCharacters, setRemainingCharacters] = useState(100);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    const remaining = 100 - (newTitle.length + body.length);
    setTitle(newTitle);
    setRemainingCharacters(remaining);
  };

  const handleBodyChange = (e) => {
    const newBody = e.target.value;
    const remaining = 100 - (title.length + newBody.length);
    setBody(newBody);
    setRemainingCharacters(remaining);
  };

  const addNoteHandler = (e) => {
    e.preventDefault()
    addNote({ title, body });
    setTitle("");
    setBody("");
    setRemainingCharacters(100);
  };

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
          <h1>Sisa karakter : {remainingCharacters} </h1>
        </div>

        {/* Mengirimkan fungsi addNoteHandler sebagai prop ke ComponentInput */}
        <ComponentInput
          onSubmit={addNoteHandler}
          onTitleChange={handleTitleChange}
          onBodyChange={handleBodyChange}
          titleValue={title}
          bodyValue={body}
        />
      </section>
    </Fragment>
  );
};

export default FragmentInput;
