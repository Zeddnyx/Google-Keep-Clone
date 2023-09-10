import { useState } from "react";

import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

import Search from "./Notes/Search";
import Navbar from "./Navbar";

import Todos from "./Todos/Todos";
import Notes from "./Notes";

import { useStoreApp } from "~/stores/useStoreApp";

export default function Index() {
  const { notes, todos, isGrid } = useStoreApp();

  const [query, setQuery] = useState("");

  const listFilter = notes.filter((val) => {
    if (query === "") return val;
    else if (val.title.toLowerCase().includes(query.toLowerCase())) {
      return val;
    }
  });

  return (
    <div className="relative min-h-screen">
      <div className="flexBetweenCenter px-2 pb-2">
        <Search query={query} setQuery={setQuery} />
        <Navbar />
      </div>
      <div
        className={`container-home bg-light0 dark:bg-dark0 ${isGrid
            ? "grid-cols-1 w-full"
            : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
          }`}
      >
        {/* Todos section */}
        <div className="todos-contaier dark:border-light0">
          <Link to="/to-do">
            <Todos todos={todos} />
          </Link>
        </div>

        {/* Notes section */}
        <Notes data={listFilter} />

        <div className="btn-add-container">
          <button className="btn-add-self">
            <Link to="/notes/new">
              <IoMdAdd size={35} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
