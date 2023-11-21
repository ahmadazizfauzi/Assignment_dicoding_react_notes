// ComponentInput.jsx

import React from "react";
import { Fragment } from "react";

const ComponentInput = ({
  onSubmit,
  onTitleChange,
  onBodyChange,
  titleValue,
  bodyValue,
}) => {
  return (
    <Fragment>
      <form action="" onSubmit={onSubmit}>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Judul"
            className="border-2 border-solid border-gray-400 p-2 rounded-lg bg-black text-white w-full my-3"
            value={titleValue}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <textarea
            rows="10"
            placeholder="Deskripsi"
            className="w-full rounded-lg bg-black p-2 border-solid border-2 border-gray-400 my-3"
            value={bodyValue}
            onChange={onBodyChange}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="flex p-2 border-2 border-solid border-gray-400 rounded-lg w-full hover:bg-gray-700"
          >
            <h1 className="text-center w-full">Buat</h1>
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ComponentInput;
