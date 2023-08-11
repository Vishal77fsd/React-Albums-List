import PropTypes from "prop-types";
import { useState } from "react";

const AddAlbum = ({ albums, setAlbums }) => {
  const [addAlbumValue, setAddAlbumValue] = useState({});

  const handleAdd = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(addAlbumValue),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        albums.unshift(data);
        setAlbums(albums);
        setAddAlbumValue({});
      });
  };
  return (
    <div className="flex  justify-center items-center h-[100vh] w-full border border-black">
      <div className="w-[20%]  flex flex-row">
        <form onSubmit={handleAdd}>
          <input
            type="text "
            className="border border-blue-300 w-full p-2 mb-2 focus:outline-none"
            placeholder="User Id"
            required
            value={addAlbumValue.userId || ""}
            onChange={(e) =>
              setAddAlbumValue({
                ...addAlbumValue,
                userId: e.target.value,
              })
            }
          />
          <textarea
            className="border w-full border-blue-300  resize-none p-2 mb-2 focus:outline-none"
            cols="20"
            rows="10"
            required
            value={addAlbumValue.title || ""}
            onChange={(e) =>
              setAddAlbumValue({
                ...addAlbumValue,
                title: e.target.value,
              })
            }
            placeholder="Title"
          />
          <button
            type="submit"
            className="p-2 text-center border-blue-300  font-edu text-2xl font-bold w-full bg-red-400"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAlbum;
AddAlbum.propTypes = {
  albums: PropTypes.array,
  setAlbums: PropTypes.func,
  id: PropTypes.number,
};
