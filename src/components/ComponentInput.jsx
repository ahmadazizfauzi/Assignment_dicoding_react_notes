import React from "react";
import { Fragment } from "react";
import { useState } from "react";

const ComponentInput = (props) => {
  const { addNote } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({title, body});
    // Reset input fields after creating a note
    setTitle("");
    setBody("");
  };

  return (
    <Fragment>
      <form action="" onSubmit={onSubmitEventHandler}>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Judul"
            className="border-2 border-solid border-gray-400 p-2 rounded-lg bg-black text-white w-full my-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            rows="10"
            placeholder="Deskripsi"
            className="w-full rounded-lg bg-black p-2 border-solid border-2 border-gray-400 my-3"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="flex p-2 border-2 border-solid border-gray-400 rounded-lg w-full hover:bg-gray-700 "
          >
            <h1 className="text-center w-full">Buat</h1>
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ComponentInput;
