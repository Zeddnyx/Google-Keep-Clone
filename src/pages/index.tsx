import { useState } from "react";

import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

import { MenuTop } from "~/components/Notes/MenuTop";
import Todos from "./Todos/Todos";
import Search from "./Notes/Search";
import Navbar from "./Navbar";
import Animation from "~/components/Animation";

import { useStoreApp } from "~/stores/useStoreApp";

export default function Index() {
  const { notes, todos } = useStoreApp();

  const [query, setQuery] = useState("");
  const [isGrid, setIsGrid] = useState(false);

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
        <Navbar isGrid={isGrid} setIsGrid={setIsGrid} />
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
        {listFilter
          .map((item, id) => {
            return (
              <Animation key={id}>
                  <div
                    className={`notes-item ${item.bg
                        ? "text-light0 border-0"
                        : "text-dark0 border-dark0 dark:text-light0 dark:border-light0"
                      } `}
                    style={{
                      backgroundColor: item.bg,
                    }}
                  >
                    <div className="flexBetweenCenter">
                      <Link to={`/notes/edit/${id}`}>
                        <div className="flex h-10 max-w-[130px] w-[130px] lg:max-w-[200px] lg:w-[200px] ">
                          <h2 className="truncate">{item.title}</h2>
                        </div>
                      </Link>
                      <MenuTop id={item.id} color={item.bg} />
                    </div>
                    <Link to={`/notes/edit/${id}`}>
                      <textarea
                        disabled
                        className="textarea-body"
                        value={item.body}
                        style={{ resize: "none" }}
                      ></textarea>
                    </Link>
                  </div>
              </Animation>
            );
          })
          .reverse()}
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
