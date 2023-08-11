import PropTypes from "prop-types";
import { useState } from "react";

const Home = ({ albums, setAlbums }) => {
  const [updateAlbum, setUpdateAlbum] = useState({});

  // Deleting album form albums array
  const handleDeleteAlbum = (e, id) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setAlbums(albums.filter((album) => album.id !== id));
      });
  };

  const handleUpdateAlbum = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/albums/${updateAlbum.id}`, {
      method: "PUT",
      body: JSON.stringify(updateAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setAlbums(
          albums.map((album) =>
            album.id === data.id ? { ...album, ...data } : album
          )
        )
      )
      .catch((err) => console.log(err));

    setUpdateAlbum({});
  };

  return (
    <div className="relative mt-[5rem] bg-slate-300">
      <div className=" w-[30%]  p-2 bg-black/[0.2] fixed right-2 mt-4">
        <h1 className="text-center font-semibold text-2xl font-edu">
          Update Album
        </h1>
        <form onSubmit={handleUpdateAlbum} className="mt-2">
          <input
            className="w-full focus:bg-slate-300 focus:outline-none p-2 mb-2 rounded-lg"
            type="text"
            required
            placeholder="Id"
            value={updateAlbum.id || ""}
            onChange={(e) =>
              setUpdateAlbum({ ...updateAlbum, id: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            className="w-full  focus:bg-slate-300 focus:outline-none  p-2 mb-2 rounded-lg"
            required
            placeholder="User Id"
            value={updateAlbum.userId || ""}
            onChange={(e) =>
              setUpdateAlbum({ ...updateAlbum, userId: e.target.value })
            }
          />
          <br />
          <textarea
            className="w-full focus:bg-slate-300 focus:outline-none  p-2 resize-none rounded-lg"
            rows={5}
            type="text"
            required
            placeholder="Title"
            value={updateAlbum.title || ""}
            onChange={(e) =>
              setUpdateAlbum({ ...updateAlbum, title: e.target.value })
            }
          />
          <br />
          <button
            type="submit"
            className="bg-red-500 w-full p-2 text-white font-edu text-[20px] font-bold rounded-md"
          >
            Update
          </button>
        </form>
      </div>
      <div className="w-[70%] p-4">
        <table>
          <thead>
            <tr>
              <td className="border border-black font-bold text-2xl text-center font-edu p-2">
                Id
              </td>
              <td className="border border-black font-bold text-2xl text-center font-edu p-2">
                User Id
              </td>
              <td className="border border-black font-bold text-2xl text-center font-edu p-2">
                Title
              </td>
              <td className="border border-black font-bold text-2xl text-center font-edu p-2">
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {albums.map((album, index) => {
              return (
                <tr key={index + 1}>
                  <td className="border border-black text-center font-edu p-2">
                    {album.id}
                  </td>
                  <td className="border border-black text-center font-edu p-2">
                    {album.userId}
                  </td>
                  <td className="border border-black text-left font-edu p-2">
                    {album.title}
                  </td>
                  <td className="border border-black text-center font-edu p-2">
                    <div className="flex flex-row gap-2">
                      <button
                        onClick={() => setUpdateAlbum(album)}
                        disabled={updateAlbum.id}
                        className="bg-blue-300 rounded-md p-2 font-extrabold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAlbum(event, album.id)}
                        className="bg-red-500 rounded-md p-2 font-extrabold"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  albums: PropTypes.array,
  setAlbums: PropTypes.func,
};
