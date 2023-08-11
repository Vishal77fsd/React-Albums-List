import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AddAlbum from "./Components/AddAlbum";
import { useEffect, useState } from "react";

const App = () => {
  // Creating State to store albums
  const [albums, setAlbums] = useState([]);

  // it will run only one time and after fetching the data from api it will store in albums array
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home albums={albums} setAlbums={setAlbums} />}
          />
          <Route
            path="/add-album"
            element={<AddAlbum albums={albums} setAlbums={setAlbums} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
