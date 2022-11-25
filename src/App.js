import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyReads from "./pages/myReads";
import Search from "./pages/search";
import React, { useState, useEffect } from "react";
import NavBar from "./components/cmpntNavBar";
import { getAll, update } from "./BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);

  const updateShelf = async (item, newShelf) => {
    
     await update(item, newShelf);
    const updatedBooks=books.map((b)=>{
      if (b.id===item.id )
      {b.shelf=newShelf;}
      return b
    });
    
    setBooks(updatedBooks);
  };
  useEffect(async () => {
    await getAll()
      .then((res) => setBooks(res))
      .catch((er) => setBooks([]));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MyReads booksOnShelves={books} onUpdateShelf={updateShelf} />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <Search booksOnShelves={books} onUpdateShelf={updateShelf} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
